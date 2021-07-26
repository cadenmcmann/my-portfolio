import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

import Biocard from "./BioCard";
import bioimage0 from "../images/bioimage-1.JPG";
import bioimage1 from "../images/bioimage-3.png";
import bioimage2 from "../images/bioimage-2.png";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Aos from "aos";
import "aos/dist/aos.css";
import backgroundPic from "../images/space-background.jpeg";

// Biography page personal information
const header0 = "Personal Life";
const content0 =
  "Hi! My name is Caden McMann and I am a student at the University of Wisconsin-Madison. " +
  "I grew up in the south suburbs of Chicago in my hometown of Frankfort Square, Illinois. While Chemistry was always " +
  "my favorite subject all throughout high school, I began taking computer science courses in college and haven't looked back since.";
const image0 = bioimage0;

const header1 = "Academia and Career";
const content1 =
  "At school, I am a rising senior " +
  "studying Mathematics and Computer Science and will graduate in December of 2021. Some of my favorite topics " +
  "include machine learning and web application development. When developing web apps, I am most skilled with the MERN " +
  "stack, which includes React.js for the front-end and Node.js, Express.js, and MongoDB for the backend.";
const image1 = bioimage1;

const header2 = "Interests";
const content2 =
  "Some of my favorite extracurricular activites include golf, disc golf, bowling, and snowboarding " +
  "among others. Being from the Chicago area, my favorite sports teams are the Chicago Bears, Bulls, and White Sox. " +
  "I am also an avid Marvel fan, where I enjoy watching their new shows being released on Disney+. Finally, I love to travel. My " +
  "most recent trip was spent hiking in the Black Hills of South Dakota with my girlfriend Emma.";
const image2 = bioimage2;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${backgroundPic})`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    position: "flex",
  },
  mainHeader: {
    color: "#DCE1E3",
    textAlign: "center",
    fontSize: "6em",
    paddingTop: "25vh",
  },
  arrowIcon: {
    color: "#DCE1E3",
    fontSize: "6em",
  },
  iconContainer: {
    textAlign: "center",
    paddingTop: "5vh",
    paddingBottom: "25vh",
  },
  biocardContainerLeft: {
    padding: "2vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
  biocardContainerRight: {
    padding: "2vh",
    paddingLeft: "90vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
}));

const Biography = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.mainHeader}>A little bit about myself...</div>
      <div className={classes.iconContainer}>
        <ArrowDownwardIcon className={classes.arrowIcon} />
      </div>

      <div data-aos="zoom-out-right" className={classes.biocardContainerLeft}>
        <Biocard
          header={header0}
          content={content0}
          image={image0}
          alt="Myself"
        />
      </div>

      <div data-aos="zoom-out-left" className={classes.biocardContainerRight}>
        <Biocard
          header={header1}
          content={content1}
          image={image1}
          alt="Myself"
        />
      </div>

      <div data-aos="zoom-out-right" className={classes.biocardContainerLeft}>
        <Biocard
          header={header2}
          content={content2}
          image={image2}
          alt="Myself"
          className={classes.biocard}
        />
      </div>
    </div>
  );
};

export default Biography;
