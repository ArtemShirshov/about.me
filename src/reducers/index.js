import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { Auth } from '../containers/Auth/ducks/Auth.reducer';
import { Posts } from '../containers/Posts/ducks/Posts.reducer';
import { NewPosts } from '../containers/NewPost/ducks/NewPost.reducer';
import { NewCategoryDialog } from '../containers/NewPost/NewCategoryDialog/ducks/NewCategoryDialog.reducer';
import { NewFeels } from '../containers/NewFeels/ducks';
import { Home } from '../containers/Home/ducks';

export const reducers = {
  Auth,
  Posts,
  NewPosts,
  NewCategoryDialog,
  NewFeels,
  Home,
};

export const createRootReducer = (history) =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
