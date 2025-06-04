import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "~/contexts/auth/AuthContext";


export default function DeconnexionView(){
  const {isLogged, handleConnexion} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogged) navigate("/connexion");
    if(isLogged) handleConnexion(false) && navigate("/");
  }, [isLogged]);

  return(<></>);
}