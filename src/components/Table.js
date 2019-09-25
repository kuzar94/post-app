import CardComponent from "./CardComponent";
import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
const useStyles = theme => ({
  root: {
    marginBottom: "40px"
  },
  progress: {
    color: "rgba(158,53,151,1)",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px"
  }
});
class Table extends React.Component {
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=2`)
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  state = {
    posts: [],
    numberOfPosts: 3
  };
  render() {
    const { classes } = this.props;
    const postCards = Object.keys(this.state.posts).map(postNumber => {
      return (
        <li key={postNumber}>
          <CardComponent commentData={this.state.posts[postNumber]} />
        </li>
      );
    });
    if (this.state.posts.length === 0) {
      return (
        <CircularProgress
          size={60}
          className={classes.progress}
          key={"loading1"}
        />
      );
    } else {
      return (
        <Box className={classes.root}>
          <ul>{postCards}</ul>
        </Box>
      );
    }
  }
}
export default withStyles(useStyles)(Table);
