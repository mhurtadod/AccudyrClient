import React from "react";
import { useSelector } from "react-redux";
//Función para el perfil de superadministrador.

function ProfileUser() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
console.log(user);
  return (
    <div className=".home_page">
      <h1 className="page-index">VACUNAS</h1>
    </div>
  );
}

export default ProfileUser;