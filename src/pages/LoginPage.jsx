import React, { useState } from "react";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Pour la création de compte
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    if (isSignUp) {
      // Création de compte
      setUser({ isLoggedIn: true, currentUser: { name: username, email } });
    } else {
      // Connexion
      setUser({ isLoggedIn: true, currentUser: { name: username, email } });
    }
  };

  return (
    <div>
      <h2>{isSignUp ? "Créer un compte" : "Connexion"}</h2>
      {!isSignUp && (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
          />
        </>
      )}
      {isSignUp && (
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
        />
      )}
      <button onClick={handleLogin}>
        {isSignUp ? "Créer un compte" : "Se connecter"}
      </button>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Déjà un compte ? Se connecter"
          : "Pas de compte ? Créer un compte"}
      </p>
    </div>
  );
};

export default LoginPage;
