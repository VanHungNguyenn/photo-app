import { ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
}

InputField.defaultProps = {
	type: 'text',
	label: '',
	placeholder: '',
	disabled: false,
}

function InputField({ field, form, type, label, placeholder, disabled }) {
	const { name } = field
	const { errors, touched } = form
	const showError = errors[name] && touched[name]

	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Input
				type={type}
				id={name}
				{...field}
				placeholder={placeholder}
				disabled={disabled}
				invalid={showError}
			/>
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	)
}

export default InputField
