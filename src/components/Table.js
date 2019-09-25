import React from 'react';
import CardComponent from './CardComponent';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../actions/commentActions';
const useStyles = (theme) => ({
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
  state = {
    numberOfPosts: 3
  };
  render() {
    const { classes } = this.props;

    const postCards = this.props.posts.map((item) => {
      return (
        <li key={item.id}>
          <CardComponent postId={item.id} name={item.name} body={item.body} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: dispatch(actions.fetchPosts()),
    fetchComments: dispatch(actions.fetchComments())
  };
};

const enhance = connect(
  (state) => {
    return {
      posts: state.comments.posts
    };
  },
  mapDispatchToProps
)(withStyles(useStyles)(Table));

export default enhance;
