import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "#f0f0f0",
    width: 450,
    margin: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  content: {
    margin: 15,
  },
  title: {
    textAlign: "left",
    fontWeight: "600",
    textTransform: "capitalize",
    marginBottom: 20,
  },
  sprites: {
    display: "flex",
    justifyContent: "left",
  },
});

const PokemonSpritesCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5">
          Sprites
        </Typography>
        <div className={classes.sprites}>
          <img src={props.sprites.front_default} alt="default front" />
          <img src={props.sprites.front_shiny} alt="shiny front" />
          <img src={props.sprites.back_default} alt="default back" />
          <img src={props.sprites.back_shiny} alt="shiny back" />
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonSpritesCard;
