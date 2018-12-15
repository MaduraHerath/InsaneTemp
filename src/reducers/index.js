import { combineReducers } from 'redux'
import people from './people'
import { reducer as internet } from 'react-redux-internet-connection';
import netStatus from "./networkStatus";

const rootReducer = combineReducers({
    people,
    netStatus,
    internet
})

export default rootReducer