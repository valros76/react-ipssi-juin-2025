import FilmsListComponent from "~/components/films/FilmsListComponent/FilmsListComponent";
import "./FilmsView.css";

export default function FilmsView() {
  return (<section className="grid-sections">
    <FilmsListComponent/>
  </section>);
}
