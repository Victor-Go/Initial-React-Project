import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)
