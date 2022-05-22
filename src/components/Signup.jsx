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
import {Link} from "react-router-dom"
import "./signup.css";
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
    <div className="signUpWrapper">
      <div className="signUpCard">
        <Card variant="outlined">
          <div className="logo">
                      {/* <img src={playit} className="logo" alt="" srcset="" /> */}
                      <p>Bhai navneet   logo daal dena yahan</p>
          </div>

          <CardContent>
            <Typography
              className={classes.text1}
              variant="subtitle1"
              component="div"
            >
              Sign up to see photos and videos from your friends
            </Typography>
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
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth="true"
              margin="dense"
              size="small"
            />
            <Button
              color="primary"
              fullWidth="true"
              margin="dense"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload your profile picture
              <input type="file" accept="image/*" hidden />
            </Button>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth="true"
              variant="contained"
              margin="dense"
            >
              Sign up
            </Button>
          </CardActions>
          <CardContent>
            <Typography
              className={classes.text1}
              variant="subtitle1"
              component="div"
            >
              By signing up you will agree to our terms and conditions, Data
              policies and cookies
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
              Already have an account? please <Link to="/login">Login</Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
