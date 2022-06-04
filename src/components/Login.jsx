import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";
import "./login.css";
import playit from "../Assets/Play.png";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
export default function Signup() {
  const useStyles = makeStyles({
    text1: {
      color: "gray",
      textAlign: "center",
    },
  });

  const classes = useStyles();
  return (
    <div className="logInWrapper">
      <div className="logInCard">
        <Card variant="outlined">
          <div className="logo">
            {/* <img src={playit} className="logo" alt="" srcset="" /> */}
            <p>Bhai navneet logo daal dena yahan</p>
          </div>

          <CardContent>
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth="true"
              margin="dense"
              size="small"
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              fullWidth="true"
              margin="dense"
              size="small"
              type="password"
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth="true"
              variant="contained"
              margin="dense"
            >
              Login
            </Button>
          </CardActions>
          <CardContent>
            <Typography
              color="primary"
              variant="subtitle1"
              component="div"
              textAlign="center"
            >
              Forgot password?
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography
              className={classes.text1}
              variant="subtitle1"
              component="div"
            >
              Already have an account? please{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
