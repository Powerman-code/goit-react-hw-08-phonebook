import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phoneBookReducer from './phoneBook/phoneBook-reducer';
import logger from 'redux-logger';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  // blacklist: 'any',
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phoneBook: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export const { store, persistor };

// import {
//   configureStore,
//   getDefaultMiddleware,
//   // combineReducers,
// } from '@reduxjs/toolkit';
// import phoneBookReducer from './phoneBook/phoneBook-reducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// // console.log(process.env.NODE_ENV);

// const phonebookPersistConfig = {
//   key: 'contacts',
//   storage,
//   // blacklist: 'any',
// };

// // const rootReducer = combineReducers({
// //   phoneBook: persistReducer(phonebookPersistConfig, phoneBookReducer),
// // });

// // const persistedReducer = persistReducer(phonebookPersistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     phoneBook: persistReducer(phonebookPersistConfig, phoneBookReducer),
//   },
//   // reducer: rootReducer,
//   // reducer: persistedReducer,
//   // {
//   //   phoneBook: phoneBookReducer,
//   // },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// export default { store, persistor };
