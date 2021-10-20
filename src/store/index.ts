import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import reducers from './reducers'
import sagas from './sagas'
import reconcile from './reconcile'

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  let reconcileState = {}

  if (action.type == '__NEXT_REDUX_WRAPPER_HYDRATE__') reconcileState = reconcile(state, action.payload)
  if (action.type === HYDRATE) return { ...state, ...action.payload, ...reconcileState }

  return reducers(state, action)
}

const makeStore: any = ({ isServer }) => {
  const sagaMiddleware = createSagaMiddleware()
  const createStoreHook = currentReducer => createStore(currentReducer, bindMiddleware([sagaMiddleware]))
  if (isServer) return createStoreHook(reducer)

  const { persistStore, persistReducer } = require('redux-persist')
  const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

  const persistConfig = {
    key: 'expomorroRoot',
    storage,
    blacklist: [
      'page',
      'color',
      'font'
    ]
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStoreHook(persistedReducer)

  store['sagaTask'] = sagaMiddleware.run(sagas)
  store['__persistor'] = persistStore(store, { manualPersist: true })

  return store
}

const wrapper: any = createWrapper(makeStore)

export default wrapper
