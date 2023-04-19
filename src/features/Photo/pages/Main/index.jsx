import React from 'react'
import Banner from '@/components/Banner'
import Images from '@/contants/images'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PhotoList from '@/features/Photo/components/PhotoList'
import { useDispatch } from 'react-redux'
import { removePhoto } from '@/features/Photo/photoSlice'

const Main = () => {
	const photos = useSelector((state) => state.photos)
	// console.log(photos)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handlePhotoEditClick = (photo) => {
		const editPhotoId = photo.id
		navigate(`/photos/${editPhotoId}`)
	}

	const handlePhotoRemoveClick = (photo) => {
		console.log('Remove: ', photo)
		const removePhotoId = photo.id
		dispatch(removePhoto(removePhotoId))
	}

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

			<PhotoList
				photoList={photos}
				onPhotoEditClick={handlePhotoEditClick}
				onPhotoRemoveClick={handlePhotoRemoveClick}
			/>
		</div>
	)
}

export default Main
