import React from 'react'
import Banner from '@/components/Banner'
import PhotoForm from '@/features/Photo/components/PhotoForm'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoto, updatePhoto } from '@/features/Photo/photoSlice'
import { useNavigate, useParams } from 'react-router-dom'
import Images from '@/contants/images'

const AddEdit = (props) => {
	const photos = useSelector((state) => state.photos)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { photoId } = useParams()
	console.log(`photoId: ${photoId}`)
	const isAddMode = !photoId

	const initialValues = isAddMode
		? {
				title: '',
				categoryId: null,
				photo: Images.COLORFUL_BG,
		  }
		: photos.find((x) => x.id === +photoId)

	const handleSubmit = (values) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (isAddMode) {
					const action = addPhoto(values)
					console.log({ action })
					dispatch(action)
				} else {
					// do something here
					const action = updatePhoto(values)
					dispatch(action)
				}

				resolve(true)
				navigate('/photos')
			}, 2000)
		})
	}

	return (
		<div>
			<Banner title='Pick your amazing photo' />
			<div className='max-w-[600px] mx-auto mt-4'>
				<PhotoForm
					isAddMode={isAddMode}
					initialValues={initialValues}
					onSubmit={handleSubmit}
				/>
			</div>
		</div>
	)
}

export default AddEdit
