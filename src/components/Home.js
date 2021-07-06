import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core";
import Typed from "react-typed";
import { Typography } from "@material-ui/core";

import image from "../images/macbook-image.jpeg";

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "200vw",
    textAlign: "center",
    zIndex: 1,
    color: "#F3F3F3",
    fontFamily: "Sans-serif",
  },
  subTitle: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "200vw",
    textAlign: "center",
    zIndex: 1,
    color: "#F3F3F3",
    fontStyle: "italic",
  },
  home_scene: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    height: "100vh",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home_scene}>
      <React.Fragment>
        <Typography className={classes.mainTitle} variant="h4">
          <Typed strings={["Caden McMann"]} typeSpeed={70} backSpeed={60} />
        </Typography>
        <Typography className={classes.subTitle} variant="h5">
          <Typed
            strings={["Student", "Developer", "Leader"]}
            typeSpeed={70}
            backSpeed={60}
            loop
          />
        </Typography>
      </React.Fragment>
      <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
          particles: {
            color: {
              value: "#999999",
            },
            line_linked: {
              color: {
                value: "#999999",
              },
            },
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            size: {
              value: 6,
            },
            move: {
              speed: 1.5,
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
