import { FETCH_COMMENTS, NEW_COMMENT } from "../actions/types";
const initialState = {
  items: [],
  item: {}
};
export default function(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_COMMENT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
