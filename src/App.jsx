import Root from '@/components/Root'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import NotFound from '@/components/NotFound'
import Photo from '@/features/Photo/pages/Main'
import AddEdit from '@/features/Photo/pages/AddEdit'

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
		],
	},
])

function App() {
	return (
		<div className='photo-app'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
