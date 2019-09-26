import { createStore, applyMiddleware, compose } from 'redux';
import { fetchPosts, fetchComments } from './actions/commentActions';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.dispatch(fetchPosts());
store.dispatch(fetchComments());

export default store;
