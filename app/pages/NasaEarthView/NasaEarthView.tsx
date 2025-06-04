import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import DateSelection from "~/components/nasa/DateSelection";
import { NasaContext } from "~/contexts/nasa/NasaContext";

enum EnabledAPIS{
  ROVER,
  EPIC
}

export default function NasaEarthView() {
  const { earthPicture, epicPicture, fetchEarthPicture, fetchEpicPicture } =
    useContext(NasaContext);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAPI, setSelectedAPI] = useState<EnabledAPIS>(EnabledAPIS.ROVER);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date("2017-6-15").toString()
  );

  /**
   * 
   * TODO: Mettre en place l'interface de switch API
   */

  const onChangeSelectedDate = (newDate: string) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    if (isLoading) {
      let actualDate = new Date(selectedDate) ?? new Date("2017-6-15");
      if(selectedAPI === EnabledAPIS.ROVER){
      (async () => {
        const promiseFinished: boolean =
          await fetchEarthPicture(actualDate);
        if (promiseFinished) {
          setIsLoading(false);
        }
      })();
      }
      if(selectedAPI === EnabledAPIS.EPIC){
      (async () => {
        const promiseFinished: boolean =
          await fetchEpicPicture(actualDate);
        if (promiseFinished) {
          setIsLoading(false);
        }
      })();
      }
    }

    if (selectedDate) {
      setIsLoading(true);
    }
  }, [earthPicture, epicPicture, selectedDate]);

  if (
    (selectedAPI === EnabledAPIS.ROVER && earthPicture?.photos?.length <= 0)
    || (selectedAPI === EnabledAPIS.EPIC && epicPicture?.photos?.length <= 0)
  )
    return (
      <section>
        <p>Aucune image trouvée.</p>
        <NavLink to="/">Sortir</NavLink>
      </section>
    );

  return (
    earthPicture?.photos?.length > 0 && (
      <section>
        <DateSelection
          selectedDate={selectedDate}
          setSelectedDate={onChangeSelectedDate}
        />
        {earthPicture?.photos?.map((data: any) => (
          <article key={data.id}>
            <h2>Date : {data?.earth_date}</h2>
            <img
              src={data?.img_src}
              alt={data?.camera?.full_name}
              loading="lazy"
            />
          </article>
        ))}
        {epicPicture?.photos?.map((data: any) => (
          <article key={data.id}>
            <h2>Date : {data?.earth_date}</h2>
            <img
              src={data?.img_src}
              alt={data?.camera?.full_name}
              loading="lazy"
            />
          </article>
        ))}
      </section>
    )
  );
}
