import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";

//Constantes iniciales
const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

//Función que ejecuta todo el inicio de sesión
function Login() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

//Una vez cargado los datos al formulario llegan a esta función
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { email, password });
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);
      localStorage.setItem("allVaccines", JSON.stringify( (await axios.get("vaccine")).data));
      dispatch(dispatchLogin());
      history.push("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

//Estos son los campos visibles en la ruta de login.
  return (
    <div>
      <div className="login_page">
        <h2>Iniciar sesión</h2>

        <br></br>
        <br></br>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="text"
              placeholder="ingresa tu correo"
              id="email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="ingresa tu contraseña"
              id="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
          </div>

          <div className="row">
            <button type="submit">Iniciar sesión</button>
          </div>
          <br />
        </form>

        <p>
          ¿No tienes un cuenta? <Link to="/register">Crear cuenta</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
