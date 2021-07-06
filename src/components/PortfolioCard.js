import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    padding: "5vh",
  },
  card: {
    width: "40vh",
    height: "35vh",
  },
  media: {
    maxHeight: "13vh",
    maxWidth: "25vh",
    margin: "auto",
    paddingTop: "2vh",
    paddingBottom: "3vh",
  },
}));

const PortfolioCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => window.open(props.link, "_blank")}>
          <CardMedia
            component="img"
            className={classes.media}
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PortfolioCard;
