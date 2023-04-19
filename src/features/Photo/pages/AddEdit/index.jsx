import React from 'react'
import Banner from '@/components/Banner'
import PhotoForm from '@/features/Photo/components/PhotoForm'
import { useDispatch } from 'react-redux'
import { addPhoto } from '@/features/Photo/photoSlice'
import { useNavigate } from 'react-router-dom'

const AddEdit = (props) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = (values) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const action = addPhoto(values)
				console.log({ action })
				dispatch(action)
				navigate('/photos')
				resolve(true)
			}, 2000)
		})
	}

	return (
		<div>
			<Banner title='Pick your amazing photo' />
			<div className='max-w-[600px] mx-auto mt-4'>
				<PhotoForm onSubmit={handleSubmit} />
			</div>
		</div>
	)
}

export default AddEdit
