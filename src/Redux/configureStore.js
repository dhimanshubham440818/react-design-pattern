// Redux/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './Reducers/counterSlice'; // Update the path as necessary

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, counterReducer);

// Configure store
const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
