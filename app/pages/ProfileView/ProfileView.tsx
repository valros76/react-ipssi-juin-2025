import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "~/contexts/auth/AuthContext";

export default function ProfileView() {
  const { user, isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id || !user.username || !user.email)
      navigate("/connexion");
  });

  if (!user.username)
    return (
      <section>
        <h2>Erreur</h2>
        <p>Vos informations sont introuvables !</p>
      </section>
    );

  if (user)
    return (
      <section>
        <h2>
          {user?.id} - Profil de {user.username}
        </h2>
        <p>Est connecté ? {isLogged ? "Oui" : "Non"}</p>
        <p>Email : {user.email}</p>
      </section>
    );
}
