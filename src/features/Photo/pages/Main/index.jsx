import React from 'react'
import Banner from '@/components/Banner'
import Images from '@/contants/images'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
	const photos = useSelector((state) => state.photos)

	console.log(`photos`, photos)

	return (
		<div>
			<Banner
				title='Your awesome photos'
				backgroundUrl={Images.PINK_BG}
			/>
			<div className='text-center py-5'>
				<Link
					to='/photos/add'
					className='py-2 px-4 bg-blue-600 rounded-full text-white font-bold text-lg'
				>
					Add new photo
				</Link>
			</div>
		</div>
	)
}

export default Main
