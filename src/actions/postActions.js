import { FETCH_POSTS, NEW_POST } from "./types";
export const fetchPosts = () => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
