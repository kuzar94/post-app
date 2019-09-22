import Card from "./Card";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const numberOfPosts = 3;
export default class Table extends Component {
  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${numberOfPosts}`
    )
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  componentStyle = {
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
  };
  state = {
    posts: []
  };
  render() {
    const postCards = Object.keys(this.state.posts).map(postNumber => {
      return (
        <li key={postNumber}>
          <Card postData={this.state.posts[postNumber]} />
        </li>
      );
    });
    if (this.state.posts.length === 0) {
      return (
        <CircularProgress
          size={60}
          style={this.componentStyle.progress}
          key={"loading1"}
        />
      );
    } else {
      return (
        <Box style={this.componentStyle.root}>
          <ul>{postCards}</ul>
        </Box>
      );
    }
  }
}
