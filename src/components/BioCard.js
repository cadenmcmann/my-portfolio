import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container, Box, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  imageContainer: {
    paddingLeft: "6vh",
  },
  image: {
    height: "100%",
    width: "100%",
    padding: "2vh",
  },
  textGrid: {
    paddingLeft: "1vh",
    color: "white",
  },
  contentContainer: {
    padding: "1vh",
    paddingTop: "2vh",
    fontSize: "17px",
    fontFamily: "Arial",
    lineHeight: "1.3em",
  },
  box: {
    backgroundColor: "#203647",
    maxWidth: "80vh",
    padding: "1vh",
  },
}));

const BioCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box borderRadius={16} className={classes.box}>
        <Grid container>
          <Grid
            item
            container
            xs={6}
            direction="column"
            className={classes.textGrid}
          >
            <Grid item>
              <Typography variant="h5" align="center">
                {props.header}
              </Typography>
              <Divider />
              <div className={classes.contentContainer}>
                <Typography variant="p">{props.content}</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={6} direction="column">
            <Grid item>
              <Container className={classes.imageContainer}>
                <img
                  src={props.image}
                  alt={props.alt}
                  className={classes.image}
                />
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BioCard;
