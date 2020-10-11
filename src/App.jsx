import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { HomeConnected } from 'containers/Home/Home';
import { AuthConnected } from 'containers/Auth/Auth';
import { PostsConnected } from 'containers/Posts/Posts';
import { NewPostConnected } from 'containers/NewPost/NewPost';
import { FeelsConnected } from 'containers/Feels/Feels';
import { NewFeelsConnected } from 'containers/NewFeels/NewFeels';
import { Settings } from 'containers/Settings/Settings';

import configureStore, { history } from './store';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Switch>
            <PrivateRoute path="/posts" component={PostsConnected} />
            <PrivateRoute path="/new-post" component={NewPostConnected} />
            <PrivateRoute path="/edit-post/:id" component={NewPostConnected} />
            <PrivateRoute path="/feels" component={FeelsConnected} />
            <PrivateRoute path="/new-feels" component={NewFeelsConnected} />
            <PrivateRoute path="/settings" component={Settings} />
            <Route path="/login" component={AuthConnected} />
            <PrivateRoute path="/" component={HomeConnected} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
