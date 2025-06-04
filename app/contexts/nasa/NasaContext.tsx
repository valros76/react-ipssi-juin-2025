import { createContext, useState, type ReactNode } from "react";

export const NasaContext = createContext<any>(null!);

export const NasaProvider = ({children}: {children: ReactNode}) => {
  const apiRoot = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
  const apiKey = "&api_key=upo5eGqSZkUEoUt3hn39TDsxSSkuMJFbbmf3JHne";

  const [earthPicture, setEathPicture] = useState([]);

  const fetchEarthPicture = async (date: Date = new Date("2015-6-3")) => {
    let exploreDate: string = `${date.getFullYear()}-${date.getMonth()}-${date.getDay() + 1}`;
    await fetch(`${apiRoot}?earth_date=${exploreDate}${apiKey}`)
    .then(result => result.ok && result.json())
    .then(datas => setEathPicture(datas))
    .catch(err => console.error(`Erreur : ${err}`));
    return true;
  }

  return(
    <NasaContext.Provider value={{
      earthPicture,
      fetchEarthPicture
    }}>
      {children}
    </NasaContext.Provider>
  );
}