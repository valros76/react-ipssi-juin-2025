import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { NasaContext } from "~/contexts/nasa/NasaContext";

export default function NasaEarthView() {
  const { earthPicture, fetchEarthPicture } =
    useContext(NasaContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      (async () => {
        let actualDate = new Date("2017-2-7");
        const promiseFinished: boolean =
          await fetchEarthPicture(actualDate);
        if (promiseFinished) {
          setIsLoading(false);
        }
      })();
    }
  }, [earthPicture]);

  if(earthPicture?.photos?.length <= 0) return (<section>
    <p>
      Aucune image trouvée.
    </p>
    <NavLink to="/">
      Sortir
    </NavLink>
  </section>);

  return (
    earthPicture?.photos?.length > 0 && (
      <section>
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
