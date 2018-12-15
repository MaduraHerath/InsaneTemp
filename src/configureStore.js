import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from "redux-logger";

const loggerMiddleware = createLogger()

export default function configureStore() {
  let store = createStore(app,  applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
  ));
  return store
}