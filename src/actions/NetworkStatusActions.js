
import * as types from "../constants";



const netstatus = (status) => ({
    type: types.CHECK_NETWORK_STATUS,
    status
});

export const updateNetstatus = (status) => dispatch => {
    dispatch(netstatus(status))
};