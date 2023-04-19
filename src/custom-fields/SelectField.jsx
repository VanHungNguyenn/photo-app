import PropTypes from 'prop-types'
import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'
import Select from 'react-select'

SelectField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	options: PropTypes.array,
}

SelectField.defaultProps = {
	label: '',
	placeholder: '',
	disabled: false,
	options: [],
}

function SelectField({ field, form, label, placeholder, disabled, options }) {
	const { name } = field
	const { errors, touched } = form
	const showError = errors[name] && touched[name]

	const selectedOption = options.find(
		(option) => option.value === field.value
	)

	const handleSelectedOptionChange = (selectedOption) => {
		const selectedValue = selectedOption
			? selectedOption.value
			: selectedOption

		const changeEvent = {
			target: {
				name: name,
				value: selectedValue,
			},
		}

		field.onChange(changeEvent)
	}

	const handleBlur = () => {
		form.setFieldTouched(name, true)
	}

	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Select
				id={name}
				{...field}
				value={selectedOption}
				onChange={handleSelectedOptionChange}
				placeholder={placeholder}
				isDisabled={disabled}
				options={options}
				onBlur={handleBlur}
				className={showError ? 'is-invalid' : ''}
			/>
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	)
}

export default SelectField
