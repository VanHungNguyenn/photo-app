import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label } from 'reactstrap'
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
	const selectedOption = options.find(
		(option) => option.value === field.value
	)
	console.log(selectedOption)

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
			/>
		</FormGroup>
	)
}

export default SelectField
