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
  stat: {
    textAlign: "right",
  },
});

const PokemonStatsCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5">
          Stats
        </Typography>
        {props.stats.map((el) => {
          return (
            <div key={el.stat.name} style={{ display: "flex" }}>
              <Typography variant="h6" className={classes.stat_heading}>
                {el.stat.name}
              </Typography>
              <Typography className={classes.stat}>{el.base_stat}</Typography>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PokemonStatsCard;
