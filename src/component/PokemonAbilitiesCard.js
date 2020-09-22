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
  stat_heading: {
    flexGrow: 1,
    textAlign: "left",
  },
});

const PokemonAbilitiesCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5">
          Abilities
        </Typography>
        {props.abilities.map((el) => {
          return (
            <Typography
              key={el.ability.name}
              variant="h6"
              className={classes.stat_heading}
            >
              {el.ability.name}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PokemonAbilitiesCard;
