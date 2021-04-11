import {LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR} from './userActionsType'
import { login } from "../../services/request"

const loadingLogin = () => ({
	type: LOGIN_LOADING
})

const successLogin = data => ({
	type: LOGIN_SUCCESS,
	payload: data
})

const errorLogin = errorMessage => ({
	type: LOGIN_ERROR,
	payload: errorMessage
})

export const loginAction = (params) => dispatch => {
	dispatch(loadingLogin())
	login(params, (isSuccessful, res) => {
		if(isSuccessful){
			dispatch(successLogin(res.payload))
		}else{
			dispatch(errorLogin(res.payload))
		}
	})
}