import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    marginTop: "-22px"
  },
  inline: {
    display: "inline"
  },
  avatarComment: {
    height: "30px",
    width: "30px",
    backgroundColor: "red",
    fontSize: "15px"
  },
  fab: {
    margin: theme.spacing(1),
    maxHeight: "30px",
    maxWidth: "30px",
    minHeight: "30px",
    minWidth: "30px",
    marginLeft: "auto"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  console.log(props.commentData);
  return (
    <List className={classes.root}>
      {Object.keys(props.commentData).map(commentNumber => {
        if (commentNumber === "hits") {
          return <li key={123}>LOADING</li>;
        } else {
          console.log(props.commentData[commentNumber]);
          return (
            <div key={commentNumber}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar aria-label="recipe" className={"2"}>
                    X2
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={props.commentData[commentNumber].name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in  in yorhood "}
                    </React.Fragment>
                  }
                />
                <Fab aria-label="delete" className={classes.fab}>
                  <DeleteIcon />
                </Fab>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        }
      })}
    </List>
  );
}
