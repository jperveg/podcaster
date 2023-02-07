import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expireReducer from 'redux-persist-expire'

import rootReducer from './rootReducer'
import { rootSaga } from './rootSaga'

const EXPIRED_TIME = 60 * 60 * 24

// Create the saga middleware
function configureStore() {
  const persistConfig = {
    key: 'root',
    storage,
    timeout: 3600 * 24,
    transforms: [
      expireReducer('podcasts', {
        // (Optional) Key to be used for the time relative to which store is to be expired
        // (Required) Seconds after which store will be expired
        expireSeconds: EXPIRED_TIME,
        // (Optional) State to be used for resetting e.g. provide initial reducer state
        expiredState: {},
        // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey`
        // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
        autoExpire: true,
      }),
      expireReducer('details', {
        expireSeconds: EXPIRED_TIME,
        expiredState: {},
        autoExpire: true,
      }),
    ],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const sagaMiddleware = createSagaMiddleware()

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
