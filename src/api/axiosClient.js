import axios from 'axios'
import queryString from 'query-string'
import firebase from 'firebase/compat/app'

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'content-type': 'application/json',
	},
	paramsSerializer: (params) => queryString.stringify(params),
})

const getFirebaseToken = async () => {
	const currentUser = firebase.auth().currentUser
	if (currentUser) {
		const token = await currentUser.getIdToken()
		return token
	}

	const hasRememberedAccount = localStorage.getItem('firebaseToken')

	// not logged in
	if (!hasRememberedAccount) {
		return null
	}

	// logged in but current user is not fetched => waiting 10s
	return new Promise((resolve, reject) => {
		const waitTimer = setTimeout(() => {
			reject(null)
		}, 10000)

		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (!user) {
					reject(null)
				}

				// user logs in, handle something here
				const token = await user.getIdToken()
				resolve(token)

				clearTimeout(waitTimer)
				unregisterAuthObserver()
			})
	})
}

axiosClient.interceptors.request.use(async (config) => {
	const token = await getFirebaseToken()

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data
		}

		return response
	},
	(error) => {
		// Handle errors
		throw error
	}
)

export default axiosClient
