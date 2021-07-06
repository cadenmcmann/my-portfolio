import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PortfolioCard from "./PortfolioCard";
import { Grid } from "@material-ui/core";

import portfolioImage from "../images/portfolio-home-page.png";
import neuralnetImage from "../images/neural-network0-image.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#4DA8DA",
    height: "100vh",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  const portfolioDescription0 =
    "This very portfolio site you are navigating at right now! " +
    "I developed this site using React.JS and the popular UI framework Material-UI.";

  const portfolioDescription1 =
    "An image classification neural network that I built " +
    "in Python with TensorFlow 2.0. The NN operates on the well known MNIST dataset.";

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <PortfolioCard
            image={portfolioImage}
            title="Portfolio site"
            description={portfolioDescription0}
            link="https://github.com/cadenmcmann/"
          />
        </Grid>
        <Grid item>
          <PortfolioCard
            image={neuralnetImage}
            title="MNIST Neural Network"
            description={portfolioDescription1}
            link="https://github.com/cadenmcmann/MNIST-Classifier"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
