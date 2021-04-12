import userAPI from './user.json'

export const login = data => {
	return userAPI.map(user => {
		if(user.userName === data.userName && user.password === data.password){
			return {
				type : "LOGIN_SUCCESS",
				payload: user
			}
		}else{
			return {
				type : "LOGIN_ERROR",
				payload: "Verifique seu usuário e senha"
			}
		}
	})[0]
}