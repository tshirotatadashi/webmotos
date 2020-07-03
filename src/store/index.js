import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import rootSaga from './modules/rootSaga'
import rootReducer from './modules/rootReducer'

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
