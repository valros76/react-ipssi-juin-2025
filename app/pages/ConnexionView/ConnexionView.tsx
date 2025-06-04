import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "~/contexts/auth/AuthContext";
import type { UserI } from "~/models/auth.interface";


export default function ConnexionView(){
  const {initUser, handleConnexion, saveUserInfos} = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  }

  const handleSubmit = (formData:FormData) => {
    const username:any = formData.get("username");
    const user: UserI = {
      id:42,
      username: username,
      email: `${username}@test.fr`
    };
    initUser(user);
    handleConnexion(true);
    saveUserInfos(user);
    navigate("/profile");
  }

  return(<section>
    <h2>Se connecter</h2>

    <form action={handleSubmit}>
      <label htmlFor="username">
        Nom d'utilisateur : 
      </label>
      <input 
        type="text" 
        name="username" 
        id="username" 
        autoComplete="username"
        required
      />
      <label htmlFor="password">
        Mot de passe (minimum 4 charactères) :
      </label>
      <input type={showPassword ? "text" : "password"} name="password" id="password" minLength={4} autoComplete="current-password" required/>
      <button
        onClick={e => {
          e.preventDefault();
          toggleShowPassword();
        }}
      >
        {showPassword ? "Masquer" : "Afficher"}
      </button>
      <button type="submit">
        Connexion
      </button>
      <button type="reset">
        Réinitialiser
      </button>
    </form>
  </section>);
}