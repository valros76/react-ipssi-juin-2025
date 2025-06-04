import { NavLink } from "react-router";
import "./MainNav.css";
import { useContext } from "react";
import { AuthContext } from "~/contexts/auth/AuthContext";

export default function MainNav(){
  const {isLogged} = useContext(AuthContext);

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
      <li className="main-menu-items">
        <NavLink to="/futurama">
          Futurama
        </NavLink>
      </li>
      <li className="main-menu-items">
        <NavLink to="/nasa">
          Nasa
        </NavLink>
      </li>
      {
        !isLogged 
        ? (<li className="main-menu-items">
        <NavLink to="/connexion">
          Connexion
        </NavLink>
      </li>) 
      : (<li className="main-menu-items">
        <NavLink to="/deconnexion">
          Déconnexion
        </NavLink>
      </li>)
      }
    </menu>
  </nav>);
}