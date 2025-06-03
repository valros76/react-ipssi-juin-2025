import FilmsListComponent from "~/components/films/FilmsListComponent/FilmsListComponent";
import "./FilmsView.css";
import CounterComponent from "~/components/global/CounterComponent/CounterComponent";
import { useCounter } from "~/contexts/global/CounterContext";

export default function FilmsView() {
  return (<section className="grid-sections">
    <FilmsListComponent/>
  </section>);
}
