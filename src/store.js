import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const initialState = {}


// const store = createStore(rootReducer,initialState,applyMiddleware(...middleware))
const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(thunk)
));

export default store