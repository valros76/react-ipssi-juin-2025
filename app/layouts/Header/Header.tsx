import MainNav from "~/navigation/MainNav/MainNav";
import "./Header.css";
interface HeaderI{
  title?: string
}

export default function Header({title}: HeaderI){
  return(<header className="main-head">
    <h1>{title ?? "React IPSSI"}</h1>
    <MainNav/>
  </header>);
}