import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import logger from 'redux-logger';
import authReducer from './auth/auth-slice';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    auth: authReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
