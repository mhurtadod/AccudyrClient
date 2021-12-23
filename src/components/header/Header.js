import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;

//Función  para cerrar sesión
  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };
//Se activa cuando se ha iniciado una sesión
  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#">
          <h2>Menú</h2>
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/vaccine">Vacunas</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0,
  };
//Carga todo lo que aparece en el header
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">
            <strong>Acudyr App</strong>
          </Link>
        </h1>
      </div>

      <ul style={transForm}>
        {isLogged ? (
          userLink()
        ) : (
          <div>
            <li>
              <Link to="/login">
                <i className="fas fa-user"></i> Iniciar sesión
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fas fa-user"></i> Registrate
              </Link>
            </li>
          </div>
        )}
      </ul>
    </header>
  );
}

export default Header;
