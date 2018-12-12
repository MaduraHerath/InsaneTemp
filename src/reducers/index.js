import { combineReducers } from 'redux'
import people from './people'
import { reducer as internet } from 'react-redux-internet-connection';

const rootReducer = combineReducers({
    people,
    internet
})

export default rootReducer