import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { FinderScreenReducer } from './reducers'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  finderScreen: FinderScreenReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export default store