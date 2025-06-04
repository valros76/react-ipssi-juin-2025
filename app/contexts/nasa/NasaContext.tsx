import { createContext, useState, type ReactNode } from "react";

export const NasaContext = createContext<any>(null!);

export const NasaProvider = ({children}: {children: ReactNode}) => {
  const apiRover = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
  const apiEpic = "https://api.nasa.gov/EPIC/api/natural/date/";
  const apiKey = "&api_key=upo5eGqSZkUEoUt3hn39TDsxSSkuMJFbbmf3JHne";

  const [earthPicture, setEarthPicture] = useState([]);
  const [epicPicture, setEpicPicture] = useState([]);

  const fetchEarthPicture = async (date: Date|string = new Date("2015-6-3")) => {
    let exploreDate: string = (typeof date !== "string") ? `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` : date;
    await fetch(`${apiRover}?earth_date=${exploreDate}${apiKey}`)
    .then(result => result.ok && result.json())
    .then(datas => setEarthPicture(datas))
    .catch(err => console.error(`Erreur : ${err}`));
    return true;
  }

  const fetchEpicPicture = async (date: Date|string = new Date("2015-6-3")) => {
    let exploreDate: string = (typeof date !== "string") ? `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` : date;
    await fetch(`${apiEpic}/${exploreDate}${apiKey}`)
    .then(result => result.ok && result.json())
    .then(datas => setEpicPicture(datas))
    .catch(err => console.error(`Erreur : ${err}`));
    return true;
  }

  return(
    <NasaContext.Provider value={{
      earthPicture,
      fetchEarthPicture,
      fetchEpicPicture,
      epicPicture
    }}>
      {children}
    </NasaContext.Provider>
  );
}