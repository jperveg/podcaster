import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'
import { rootSaga } from './rootSaga'

// Create the saga middleware
function configureStore() {
  const persistConfig = {
    key: 'root',
    storage,
    timeout: 3600 * 24,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const sagaMiddleware = createSagaMiddleware()

  // Mount it on the Store
  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(sagaMiddleware, logger)
  )
  const persistor = persistStore(store, null, () => {
    console.log('store persisted', store.getState())
  })

  // Run the saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
export default configureStore
