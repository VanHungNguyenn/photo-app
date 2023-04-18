import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from '@/contants/global'
import Select from 'react-select'
import Images from '@/contants/images'

const PhotoForm = () => {
	return (
		<Form>
			<FormGroup>
				<Label for='titleId'>Title</Label>
				<Input
					name='title'
					id='titleId'
					placeholder='Eg: Wow nature ...'
				/>
			</FormGroup>
			<FormGroup>
				<Label for='categoryId'>Category</Label>
				<Select
					name='categoryId'
					id='categoryId'
					options={PHOTO_CATEGORY_OPTIONS}
				/>
			</FormGroup>
			<FormGroup>
				<Label for='categoryId'>Photo</Label>
				<div>
					<Button type='button' outline color='primary'>
						Random a photo
					</Button>
				</div>
				<div>
					<img
						className='h-[200px] w-[200px] object-cover'
						src={Images.COLORFUL_BG}
						alt='colorful-bg'
					/>
				</div>
			</FormGroup>
			<FormGroup>
				<Button color='primary'>Add to album</Button>
			</FormGroup>
		</Form>
	)
}

export default PhotoForm
