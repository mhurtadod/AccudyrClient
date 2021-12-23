import React  from "react";
import { useSelector } from "react-redux";

//Función para el perfil de superadministrador.

function ProfileUser() {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
  //Todo lo visible en las vistas está después del return
  console.log(user);
  return (
    <div>
      <div className="login_page">
        <h2>Mi Perfil</h2>
        

        
          <br />
          <br />
          <div className="newUser">
            <label htmlFor="name">Nombre </label>
            <br />
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              id="name"
              value={user.name}
              name="name"
            />
          </div>
          <br />


          <div>
            <label htmlFor="email">Correo electrónico </label>
            <br />
            <input
              type="text"
              placeholder="Ingresa tu correo"
              id="email"
              value={user.email}
              name="email"
            />
          </div>
          <br />

          <div>
            <table>
              <tr>
                <th>Vacuna</th>
                <th>Aplicada</th>
              </tr>
            
            {user.vaccines.map((item, i) => {
              console.log(item);
              return (<tr><td>{item.name}</td> <td>{ item.applied.toString() === 'true' ? 'SI' : 'NO'}</td> </tr>) 
            })}
            </table>
          </div>

          <br />

      </div>
    </div>
  );
}

export default ProfileUser;