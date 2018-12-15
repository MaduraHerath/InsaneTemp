import {CHECK_NETWORK_STATUS} from "../constants";

export default  netStatus = (state = {connection: false}, action) => {
    switch (action.type) {
        case CHECK_NETWORK_STATUS:
            return Object.assign({}, state, {
                connection: action.status,
            });
        default:
            return state
    }
}
