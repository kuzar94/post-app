<<<<<<< HEAD:src/reducers/commentReducer.js
import { FETCH_COMMENTS, FETCH_POSTS } from '../actions/types';
=======
import { FETCH_POSTS, NEW_POST } from "../actions/types";
>>>>>>> parent of 17ac509... Added posting comments function:src/reducers/postReducer.js
const initialState = {
  items: [],
  item: {},
  posts: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
<<<<<<< HEAD:src/reducers/commentReducer.js
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
=======
>>>>>>> parent of 17ac509... Added posting comments function:src/reducers/postReducer.js
    default:
      return state;
  }
}
