import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
// import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    spacing: "50px"
  },
  child: {
    width: "60%",
    spacing: "50px"
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div>
      <h1>Already a UNICEF Member?</h1>
      <h2>Login below:</h2>
    <div className={classes.container}>
      <div className={classes.child}>
        <TextField
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
        //   onClick={(e) => {
        //     userService
        //       .login(email, password)
        //       .then((data) => {
        //         console.log(data);
        //         window.location.href = "/";
        //       })
        //       .catch((err) => {
        //         console.log(err);
        //       });
        //   }}
        >
          Login
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Login;
