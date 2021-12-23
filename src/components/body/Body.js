import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Vaccine from "./vaccine/Vaccine";
import Profile from "../body/profile/Profile";
import NotFound from "../utils/NotFound/NotFound";

import Home from "../body/home/Home";

import { useSelector } from "react-redux";

//Rutas que aparecen en la pantalla de inicio
function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <section>
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/login" component={isLogged ? NotFound : Login} exact />
        <Route
          path="/register"
          component={isLogged ? NotFound : Register}
          exact
        />

        <Route
          path="/profile"
          component={isLogged ? Profile : NotFound}
          exact
        />

        <Route
          path="/vaccine"
          component={isLogged ? Vaccine : NotFound}
          exact
        />
      </Switch>
    </section>
  );
}

export default Body;
