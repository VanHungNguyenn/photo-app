import React from 'react'
import { FormGroup, Label, Button, Spinner } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from '@/contants/global'
import Images from '@/contants/images'
import { Formik, Form, FastField } from 'formik'
import InputField from '@/custom-fields/InputField'
import SelectField from '@/custom-fields/SelectField'
import RandomPhotoField from '@/custom-fields/RandomPhotoField'
import * as Yup from 'yup'

const PhotoForm = ({ onSubmit }) => {
	const initialValues = {
		title: '',
		categoryId: null,
		photo: Images.COLORFUL_BG,
	}

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('This field is required.'),
		categoryId: Yup.number().required('This field is required.'),
		photo: Yup.string().required('This field is required.'),
	})

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formikProps) => {
				// do something here
				const { values, errors, touched, isSubmitting } = formikProps

				return (
					<Form>
						<FastField
							name='title'
							component={InputField}
							label='Title'
							placeholder='Eg: Wow nature ...'
						/>
						<FastField
							name='categoryId'
							component={SelectField}
							label='Category'
							placeholder='What your photo category?'
							options={PHOTO_CATEGORY_OPTIONS}
						/>
						<FastField
							name='photo'
							component={RandomPhotoField}
							label='Photo'
						/>
						<FormGroup>
							<Button type='submit' outline color='primary'>
								{isSubmitting ? (
									<Spinner size='sm' />
								) : (
									'Add to album'
								)}
							</Button>
						</FormGroup>
					</Form>
				)
			}}
		</Formik>
	)
}

export default PhotoForm
