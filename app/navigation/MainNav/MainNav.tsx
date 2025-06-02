import { NavLink } from "react-router";
import "./MainNav.css";
export default function MainNav(){
  return(<nav className="main-nav">
    <menu className="main-menu">
      <li className="main-menu-items">
        <NavLink to="/">
          Accueil
        </NavLink>
      </li>
      <li className="main-menu-items">
        <NavLink to="/films">
          Films
        </NavLink>
      </li>
    </menu>
  </nav>);
}