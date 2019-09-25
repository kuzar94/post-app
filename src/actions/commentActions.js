import { FETCH_COMMENTS, NEW_COMMENT, FETCH_POSTS } from './types';
export const fetchComments = () => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=2`)
    .then((res) => res.json())
    .then((comments) =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

export const fetchPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
    .catch((err) => {
      throw new Error(err);
    });
};

export const createComment = (commentData, postId) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
    .then((res) => res.json())
    .then((comment) =>
      dispatch({
        type: NEW_COMMENT,
        payload: comment,
        postId: postId
      })
    );
};
