import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "#FFD151",
    margin: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  content: {
    display: "flex",
    margin: 15,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  action: {
    flexGrow: 1,
    textAlign: "right",
  },
});

const PokemonListCard = (props) => {
  const classes = useStyles();

  return (
    <Link to={`/pokemon/${props.name}`} style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography className={classes.title} component="h2">
              {props.name}
            </Typography>
            <Typography className={classes.action}>View Details</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PokemonListCard;
