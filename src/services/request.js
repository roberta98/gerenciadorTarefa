import userAPI from './user.json'

export const login = (data, callback) => {
	userAPI.map(user => {
		if(user.userName === data.userName && user.password === data.password){
			callback(true, user)
			return {
				type : "LOGIN_SUCCESS",
				payload: user
			}
		}else{
			callback(false, user)
			return {
				type : "LOGIN_ERROR",
				payload: "Verifique seu usuário e senha"
			}
		}
	})
}