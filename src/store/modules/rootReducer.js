import storage from 'redux-persist/lib/storage'
import persistCombineReducers from 'redux-persist/es/persistCombineReducers'
import vehicles from './vehicles/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

export default persistCombineReducers(persistConfig, { vehicles })
