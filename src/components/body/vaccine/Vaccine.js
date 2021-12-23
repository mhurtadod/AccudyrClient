import React from "react";
import { useSelector } from "react-redux";
import VaccineAdmin from "./VaccineAdmin";
import VaccineUser from "./VaccineUser";

//Función para el perfil de usuario.

function Profile() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
debugger;
  return (
    <div className=".home_page">
      {user.rol === 0 ? <VaccineUser /> : <VaccineAdmin />}
    </div>
  );
}

export default Profile;
