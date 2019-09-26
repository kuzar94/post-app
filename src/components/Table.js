<<<<<<< HEAD
import React from 'react';
import CardComponent from './CardComponent';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../actions/commentActions';
const useStyles = (theme) => ({
=======
import CardComponent from "./CardComponent";
import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
const useStyles = theme => ({
>>>>>>> parent of 17ac509... Added posting comments function
  root: {
    marginBottom: '40px'
  },
  progress: {
    color: 'rgba(158,53,151,1)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px'
  }
});
class Table extends React.Component {
<<<<<<< HEAD
=======
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5`)
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
>>>>>>> parent of 17ac509... Added posting comments function
  state = {
    numberOfPosts: 3
  };
  render() {
    const { classes } = this.props;

    const postCards = this.props.posts.map((item) => {
      return (
<<<<<<< HEAD
        <li key={item.id}>
          <CardComponent postId={item.id} name={item.name} body={item.body} />
=======
        <li key={postNumber}>
          <CardComponent postData={this.state.posts[postNumber]} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 17ac509... Added posting comments function
=======
>>>>>>> parent of 17ac509... Added posting comments function
=======
>>>>>>> parent of 17ac509... Added posting comments function
        </li>
      );
    });

    return this.props.posts.length === 0 ? (
      <CircularProgress
        size={60}
        className={classes.progress}
        key={'loading1'}
      />
    ) : (
      <Box className={classes.root}>
        <ul>{postCards}</ul>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.comments.posts
});

export default connect(mapStateToProps)(withStyles(useStyles)(Table));
