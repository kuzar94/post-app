import { FETCH_COMMENTS, NEW_COMMENT } from "./types";
export const fetchComments = () => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=2`)
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};
export const createComment = (commentData, postId) => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: NEW_COMMENT,
        payload: comment,
        postId: postId
      })
    );
};
