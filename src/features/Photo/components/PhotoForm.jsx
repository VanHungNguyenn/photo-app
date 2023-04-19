import React from 'react'
import { FormGroup, Label, Button } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from '@/contants/global'
import Images from '@/contants/images'
import { Formik, Form, FastField } from 'formik'
import InputField from '@/custom-fields/InputField'
import SelectField from '@/custom-fields/SelectField'
import RandomPhoto from '@/components/RandomPhoto'

const PhotoForm = () => {
	const initialValues = {
		title: '',
		categoryId: null,
	}

	return (
		<Formik initialValues={initialValues}>
			{(formikProps) => {
				// do something here
				const { values, errors, touched } = formikProps
				console.log({ values, errors, touched })

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
						<RandomPhoto />
						<FormGroup>
							<Button color='primary'>Add to album</Button>
						</FormGroup>
					</Form>
				)
			}}
		</Formik>
	)
}

export default PhotoForm
