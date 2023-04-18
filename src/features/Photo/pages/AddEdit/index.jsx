import React from 'react'
import Banner from '@/components/Banner'
import PhotoForm from '@/features/Photo/components/PhotoForm'

const AddEdit = () => {
	return (
		<div>
			<Banner title='Pick your amazing photo' />
			<div className='max-w-[600px] mx-auto mt-4'>
				<PhotoForm />
			</div>
		</div>
	)
}

export default AddEdit
