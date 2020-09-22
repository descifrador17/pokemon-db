import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar style={{ background: "#f0f0f0" }} position="sticky">
        <Toolbar className={classes.root}>
          <NavLink to={"/"} exact>
            <img src={logo} alt={"Error"} height="40px" />
          </NavLink>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
