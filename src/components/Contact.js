import React from "react";
import {
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core/";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import emailjs from "emailjs-com";
import config from "../config";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    margin: "auto",
    backgroundColor: "#203647",
  },
  cardContainer: {
    paddingTop: "10vh",
    height: "100vh",
    backgroundColor: "#203647",
  },
  text: {
    "& .MuiInputBase-root": {
      color: "#FFFFF8",
    },
  },
  header: {
    color: "#FFFFF8",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#E12826",
    },
    "& label": {
      color: "#E12826",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E12826",
      },
      "&:hover fieldset": {
        borderColor: "#FFDF6C",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#FFDF6C",
      },
    },
  },
})(TextField);

const Contact = (props) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmission = () => {
    if (!firstName || !lastName || !message) {
      alert("Please fill out all required fields marked with an asterisk");
      return;
    }
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      phone_number: `${phoneNumber}`,
      message: `${message}`,
      from_email: `${email}`,
    };

    emailjs
      .send(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        templateParams,
        config.USER_ID
      )
      .then(
        function (response) {
          alert("Success! Your message was sent.");
        },
        function (error) {
          alert("Sorry! Your message could not be sent.");
        }
      );
  };

  return (
    <Box className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" align="center" className={classes.header}>
            Contact me!
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <InputField
                className={classes.text}
                color="secondary"
                label="First Name"
                placeholder="Enter first name"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ style: { color: "#FFFFF8" } }}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <InputField
                className={classes.text}
                color="secondary"
                label="Last Name"
                placeholder="Enter last name"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ style: { color: "#FFFFF8" } }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid xs={12} item>
              <InputField
                className={classes.text}
                color="secondary"
                type="email"
                label="Email"
                placeholder="Enter email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#FFFFF8" } }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid xs={12} item>
              <InputField
                className={classes.text}
                color="secondary"
                type="number"
                label="Phone Number"
                placeholder="Enter phone nuber"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: "#FFFFF8" } }}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid xs={12} item>
              <InputField
                className={classes.text}
                color="secondary"
                label="Message"
                multiline
                rows={6}
                placeholder="Type your message here"
                variant="outlined"
                fullWidth
                required
                InputLabelProps={{ style: { color: "#FFFFF8" } }}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid xs={12} item>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                onClick={() => handleEmailSubmission()}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
