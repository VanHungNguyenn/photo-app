import Root from '@/components/Root'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotFound from '@/components/NotFound'
import Photo from '@/features/Photo/pages/Main'
import AddEdit from '@/features/Photo/pages/AddEdit'
import SignIn from '@/features/Auth/pages/SignIn'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useEffect } from 'react'
import productApi from './api/productApi'
import { useDispatch } from 'react-redux'
import { getMe } from './app/userSlice'
import { unwrapResult } from '@reduxjs/toolkit'

const config = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
}
firebase.initializeApp(config)

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Navigate to='/photos' />,
			},
			{
				path: '/photos',
				element: <Photo />,
			},
			{
				path: '/photos/add',
				element: <AddEdit />,
			},
			{
				path: '/photos/:photoId',
				element: <AddEdit />,
			},
			{
				path: 'sign-in',
				element: <SignIn />,
			},
		],
	},
])

function App() {
	const dispatch = useDispatch()

	const fetchProductList = async () => {
		try {
			const params = {
				_limit: 10,
				_page: 1,
			}

			const response = await productApi.getAll(params)
			console.log(response)
		} catch (error) {
			console.log('Failed to fetch product list: ', error)
		}
	}

	useEffect(() => {
		fetchProductList()
	}, [])

	// handle firebase auth changed
	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (!user) {
					// user logs out, handle something here
					console.log('User is not logged in')
					return
				}

				// user logs in, handle something here
				try {
					const action = getMe()
					const resultAction = await dispatch(action)
					const currentUser = unwrapResult(resultAction)
					console.log('Logged in user: ', currentUser)
				} catch (error) {
					console.log('Failed to login: ', error)
				}

				const token = await user.getIdToken()
				localStorage.setItem('firebaseToken', token)
			})

		return () => unregisterAuthObserver()
	}, [])

	return (
		<div className='photo-app'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
