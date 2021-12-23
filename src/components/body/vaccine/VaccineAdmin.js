import React  from "react";
import axios from "axios";
//Función para el perfil de superadministrador.

function ProfileAdmin() {
  axios.get("vaccine").then(res=>{
    if(res.data){
debugger;
      localStorage.setItem("allVaccines", JSON.stringify(res.data));
    }
  });
  var vaccines = JSON.parse(localStorage.getItem('allVaccines'));

  return (
    <div className=".home_page">
      <h1 className="page-index">Vacunas ADMINISTRADOR</h1>
      <table style={{margin: "0 auto", border: '1px solid #ccc'}}>
        <thead>
          <tr>
            <th>Vacuna</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {vaccines.map((item, i) => (<tr><td>{item.name}</td><td>{item.stock}</td></tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default ProfileAdmin;
