import { LOGIN_SUCCESS,	LOGIN_ERROR, LOGIN_LOADING } from "../Actions/userActionsType"

const initialStateUser = {
	loginAccess: [],
	loadingLogin: false,
	errorMessage: ''
};

export const user = (state = initialStateUser, action) => {
	switch(action.type){
		case LOGIN_LOADING:
			return {
				...state,
				loadingLogin: true
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				loadingLogin: false,
				loginAccess : action.payload,
				errorMessage: ''			
			}
		case LOGIN_ERROR: 
			return {
				...state,
				loginAccess : [],
				errorMessage: action.payload
			}
		default:
		return state; 
	}
}