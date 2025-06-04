import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "~/contexts/auth/AuthContext";


export default function DeconnexionView(){
  const {isLogged, handleConnexion, deleteUserSession, resetUser} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogged) navigate("/connexion");
    if(isLogged) (handleConnexion(false), resetUser(), deleteUserSession()) && navigate("/");
  }, [isLogged]);

  return(<></>);
}