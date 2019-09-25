import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentActions";
import PropTypes from "prop-types";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  card: {
    marginTop: 40,
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "red"
  },
  avatarComment: {
    height: "30px",
    width: "30px",
    backgroundColor: "red",
    fontSize: "15px"
  },
  favouriteIcon: {
    marginLeft: "auto"
  },
  fab: {
    margin: theme.spacing(1),
    maxHeight: "30px",
    maxWidth: "30px",
    minHeight: "30px",
    minWidth: "30px",
    marginLeft: "auto"
  }
});
class CardComponent extends React.Component {
  componentWillMount() {
    this.props.fetchComments();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newComment) {
      this.props.comments.unshift(nextProps.newComment);
    }
  }

  getFirstLetter(stringData) {
    return stringData.charAt(0);
  }
  state = {
    open: false,
    stringOpen: "Show comments"
  };
  handleExpandClick = () => {
    this.setState({ open: !this.state.open });
    if (this.state.stringOpen === "Show comments") {
      this.setState({ stringOpen: "Hide Comments" });
    } else {
      this.setState({ stringOpen: "Show comments" });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {this.getFirstLetter(this.props.commentData.name)}
            </Avatar>
          }
          action={
            <Fab aria-label="delete" className={classes.fab}>
              <DeleteIcon />
            </Fab>
          }
          title={this.props.commentData.name}
          subheader={this.props.commentData.email}
        />
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/1240"
          title="Some Photo"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.commentData.body}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.open
            })}
            onClick={this.handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
          <Typography>{this.state.stringOpen}</Typography>
          <IconButton className={classes.favouriteIcon}>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.open}>
          <CardContent>
            <CommentList commentData={this.props.comments} />
            <CommentForm postNumber={this.props.commentData.id} />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
CardComponent.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  newComment: PropTypes.object
};
const mapStateToProps = state => ({
  comments: state.comments.items,
  newComment: state.comments.item
});
export default connect(
  mapStateToProps,
  { fetchComments }
)(withStyles(useStyles)(CardComponent));
