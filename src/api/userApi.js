import firebase from 'firebase/compat/app'

const userApi = {
	getMe: () => {
		return new Promise((resolve, reject) => {
			const currentUser = firebase.auth().currentUser
			// wait 500ms to simulate a real API call
			setTimeout(() => {
				resolve({
					id: currentUser.uid,
					name: currentUser.displayName,
					email: currentUser.email,
					photoUrl: currentUser.photoURL,
				})
			}, 500)
		})
	},
}

export default userApi
