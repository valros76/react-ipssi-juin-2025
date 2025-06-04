import type React from "react"

import { useState } from "react"

export default function DateSelection({selectedDate, setSelectedDate}: {selectedDate: string, setSelectedDate:any}) {
  const dates = [
    new Date(2017, 5, 15),
    new Date(2017, 5, 22),
    new Date(2017, 5, 29),
    new Date(2018, 6, 5),
    new Date(2018, 6, 13),
  ];

  // const [selectedDate, setSelectedDate] = useState<string>("");

  const formatDateFrench = (date: Date): string => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const getDateValue = (date: Date): string => {
    return date.toISOString().split("T")[0];
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  }

  return (
    <section>
            <h2>Sélection de date</h2>
          <form>
            <label htmlFor="date-select">Date souhaitée</label>
            <select
              id="date-select"
              value={selectedDate}
              onChange={handleDateChange}
            >
              <option value="" disabled>
                Sélectionnez une date...
              </option>
              {dates.map((date, index) => (
                <option key={index} value={getDateValue(date)}>
                  {formatDateFrench(date)}
                </option>
              ))}
            </select>
          </form>
    </section>
  )
}