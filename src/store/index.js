import {
    configureStore,
    combineReducers
  } from '@reduxjs/toolkit';
  import {
    persistStore,
    persistReducer
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import movieReducer from './movie';
  
  const reducer = combineReducers({
    movie: movieReducer,
  });
  
  const persistConfg = {
    key: 'root',
    storage: storage,
    blacklist: ['movie']
  }
  
  const persistedReducer = persistReducer(persistConfg, reducer);
  
  
  export const store = configureStore({
    reducer: persistedReducer
  });
  
  export const persistor = persistStore(store);