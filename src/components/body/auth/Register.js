import React, { useState } from "react";
import {dispatchGetVaccines} from "./../../../redux/actions/vaccineAction"
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,

} from "../../utils/validation/Validation";
//Variables iniciales
const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
  vaccines: []
};
const vaccinesList = 
["BCG", "Hepatitis B", "DPT", "HiB", "Polio", 
"Rotavirus", "Neumococo", "Influenza estacional",
"SRP", "Varicela", "Hepatitis A", "Fiebre amarilla"];


//Función que ejecuta todo el registro
function Register() {
  const [user, setUser] = useState(initialState);
  const history = useHistory();
  var vaccinesChecked = [];
  //Constantes iniciales
  const {
    name,
    email,
    password,
    cf_password,
    err,
    success,
    vaccines
  } = user;

  const handleChangeCheck = (e) => {
    vaccinesChecked = [];
    document.querySelectorAll('input[type=checkbox]').forEach((item) => vaccinesChecked.push({ name:item.name, applied:item.checked}));
  }

  //Almacena el nombre del campo y su valor
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
  //Cuando se ejecuta el formulario carga la función
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Condiciones para evaluar los campos
    if (isEmpty(name) || isEmpty(password))
      return setUser({
        ...user,
        err: "Por favor, rellena todos los campos.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Correos invalidos", success: "" });



    if (isLength(password))
      return setUser({
        ...user,
        err: "La contraseña debe tener al menos 6 caracteres.",
        success: "",
      });



    if (!isMatch(password, cf_password))
      return setUser({
        ...user,
        err: "Las contraseñas son diferentes.",
        success: "",
      });

    setUser({ ...user, [vaccines]: vaccinesChecked })

    //Sube los datos de un metodo post a la ruta.
    try {
      debugger;
      const res = await axios.post("/user/register", {
        name,
        email,
        password,
        vaccines: vaccinesChecked
      });
      //Carga los datos de registro a la base de datos
      setUser({ ...user, err: "", success: res.data.msg });
      
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  
  //Todo lo visible en las vistas está después del return
  return (
    <div>
      <div className="login_page">
        <h2>Registro</h2>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <div className="newUser">
            <label htmlFor="name">Nombre </label>
            <br />
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              id="name"
              value={name}
              name="name"
              onChange={handleChangeInput}
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
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Contraseña </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              id="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <div>
            <label htmlFor="cf_password">Confirmar contraseña </label>
            <input
              type="password"
              placeholder="Confirma tu contraseña"
              id="cf_password"
              value={cf_password}
              name="cf_password"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <table>
              <tr>
                <th>Vacuna</th>
                <th>Aplicada</th>
              </tr>
            
            {vaccinesList.map((item, i) => {

              return (<tr><td>{item}</td> <td><input type="checkbox" onChange={handleChangeCheck} className="vaccines" name={item}></input></td> </tr>) 
            })}
            </table>
          </div>

          <br />
          <div className="row">
            <button type="submit">Registrar</button>
          </div>
        </form>

        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
