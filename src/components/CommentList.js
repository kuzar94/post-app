import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
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
    maxHeight: "30px",
    maxWidth: "30px",
    minHeight: "30px",
    minWidth: "30px",
    marginLeft: "auto"
  },
  progress: {
    color: "purple",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px"
  }
});

class CommentList extends React.Component {
  getFirstLetter(stringData) {
    return stringData.charAt(0);
  }
  getHashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
  }
  getFirstWord(str) {
    let spacePosition = str.indexOf(" ");
    if (spacePosition === -1) return str;
    else return str.substr(0, spacePosition);
  }
  getAvatarStyle(dataString) {
    return {
      height: "30px",
      width: "30px",
      backgroundColor: "#" + this.intToRGB(this.getHashCode(dataString)),
      fontSize: "15px"
    };
  }

  render() {
    const { classes } = this.props;
    const commentsItems = Object.keys(this.props.commentData).map(
      commentNumber => {
        return (
          <div key={commentNumber}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  aria-label="recipe"
                  style={this.getAvatarStyle(
                    this.getFirstWord(
                      this.props.commentData[commentNumber].name
                    )
                  )}
                >
                  {this.getFirstLetter(
                    this.props.commentData[commentNumber].name
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={this.props.commentData[commentNumber].name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {this.props.commentData[commentNumber].email}
                    </Typography>{" "}
                    - {this.props.commentData[commentNumber].body}
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
    );

    return <List className={classes.root}>{commentsItems}</List>;
  }
}
export default withStyles(useStyles)(CommentList);
