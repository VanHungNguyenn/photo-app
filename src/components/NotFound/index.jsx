import React from 'react'
import Images from '@/contants/images'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<img
				className='w-[300px] h-[300px] object-cover'
				src={Images.NOT_FOUND}
				alt='Not found'
			/>
			<h3 className='text-2xl font-bold'>Oop! Page not found</h3>

			<Link to='/'>
				<button className='bg-blue-600 text-white px-4 py-2 rounded-full mt-4'>
					Back to homepage
				</button>
			</Link>
		</div>
	)
}

export default NotFound
