import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messengerReducer from './messenger-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messengerPage: messengerReducer,
  friendsPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
