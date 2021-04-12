import { LOGIN_SUCCESS,	LOGIN_ERROR, LOGIN_LOADING } from "../Actions/userActionsType"

const initialStateUser = {
	loginAccess: [],
	loadingLogin: false,
	logginOn: false,
	errorMessage: ''
};

export const user = (state = initialStateUser, {type, payload}) => {
	switch(type){
		case LOGIN_LOADING:
			return {
				...state,
				loadingLogin: true
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				loadingLogin: false,
				loginAccess : payload,
				logginOn: true,
				errorMessage: ''			
			}
		case LOGIN_ERROR: 
			return {
				...state,
				loginAccess : [],
				errorMessage: payload
			}
		default:
		return state; 
	}
}

console.log(user)