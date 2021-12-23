import React from "react";
import { useSelector } from "react-redux";
import ProfileAdmin from "./ProfileAdmin";
import ProfileUser from "./ProfileUser";

//Función para el perfil de usuario.

function Profile() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
debugger;
  return (
    <div className=".home_page">
      {user.rol === 0 ? <ProfileUser /> : <ProfileAdmin />}
    </div>
  );
}

export default Profile;
