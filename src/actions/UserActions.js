import * as types from "../constants";
import axios from 'axios';
import {AUTHENTICATED} from "../constants";
import {AUTHENTICATION_ERROR} from "../constants";

const URL = 'http://localhost:3030';


export function singInAction({userName,password}) {
    return async (dispatch) => {
        try{
            const res = await axios.post(`${URL}/user`, { userName, password });
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', res.data.token);

        }
        catch(error) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            })
        }
    }
    
}