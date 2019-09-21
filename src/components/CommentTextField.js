import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/styles";
import DoneIcon from "@material-ui/icons/Done";
import { createMuiTheme } from "@material-ui/core/styles";
const purpleColor = "rgba(158,53,151,1)";
const themeButton = createMuiTheme({
  palette: {
    secondary: { main: "rgba(158,53,151,1)" }
  }
});
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(2)
  },
  typography: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "5px"
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(0),
    "& label.Mui-focused": {
      color: purpleColor
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: purpleColor
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: purpleColor
      },
      "&:hover fieldset": {
        borderColor: purpleColor
      },
      "&.Mui-focused fieldset": {
        borderColor: purpleColor
      }
    }
  },
  button: {
    marginLeft: "auto",
    marginRight: "8px"
  }
}));
export default function OutlinedTextField() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography}>Your comment</Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          height="50%"
          placeholder="Type your name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="title"
          label="Title"
          placeholder="Type comment title"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="comment"
          label="Comment"
          placeholder="Type your comment"
          variant="outlined"
          className={classes.textField}
          style={{ margin: 6 }}
          fullWidth
        />
        <ThemeProvider theme={themeButton}>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            SEND <DoneIcon className={classes.rightIcon} />
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
}
