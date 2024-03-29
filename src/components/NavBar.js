import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  toolbar: {
    background:
      "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  button: {
    height: 35,
    minWidth: "100px",
    marginRight: "5px"
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginStatusText, setLoginStatusText] = useState("Log In");
  function handleLoginClick() {
    setLoginStatus(!loginStatus);
    if (loginStatus) {
      setLoginStatusText("Log In");
    } else {
      setLoginStatusText("Log Out");
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Post App
          </Typography>
          <Button
            onClick={handleLoginClick}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {loginStatusText}
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
