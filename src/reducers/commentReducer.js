import { FETCH_COMMENTS, FETCH_POSTS } from '../actions/types';
const initialState = {
  items: [],
  item: {},
  posts: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
