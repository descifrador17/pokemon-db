import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "./assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  search: {
    flexGrow: 1,
    textAlign: "right",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar style={{ background: "#f0f0f0" }} position="sticky">
        <Toolbar>
          <NavLink to={"/"} exact>
            <img src={logo} alt={"Error"} height="40px" />
          </NavLink>
          <Typography variant="h6" color="inherit" className={classes.search}>
            <NavLink
              to={"/"}
              style={{ textDecoration: "none", color: "#BD4089" }}
            >
              Search
            </NavLink>
          </Typography>
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
