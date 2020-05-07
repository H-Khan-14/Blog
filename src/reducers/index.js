import { combineReducers } from 'redux';
import postReducers from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  /*dummyReducer: () =>
    'For beginners who do not yet know how to structure their reducers a dummy reducer works like this. It makes the error go away so you can continue working.'*/
  posts: postReducers,
  users: usersReducer
});
