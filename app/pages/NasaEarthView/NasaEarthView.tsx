import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import DateSelection from "~/components/nasa/DateSelection";
import { NasaContext } from "~/contexts/nasa/NasaContext";

export default function NasaEarthView() {
  const { earthPicture, fetchEarthPicture } =
    useContext(NasaContext);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date("2017-6-15").toString()
  );

  const onChangeSelectedDate = (newDate: string) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    if (isLoading) {
      (async () => {
        let actualDate = new Date(selectedDate) ?? new Date("2017-6-15");
        const promiseFinished: boolean =
          await fetchEarthPicture(actualDate);
        if (promiseFinished) {
          setIsLoading(false);
        }
      })();
    }

    if (selectedDate) {
      setIsLoading(true);
    }
  }, [earthPicture, selectedDate]);

  if (earthPicture?.photos?.length <= 0)
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
            />
          </article>
        ))}
      </section>
    )
  );
}
