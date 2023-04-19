import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

RandomPhoto.propTypes = {
	name: PropTypes.string,
	imageUrl: PropTypes.string,
	onImageUrlChange: PropTypes.func,
	onRandomButtonBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
	name: '',
	imageUrl: '',
	onImageUrlChange: null,
	onRandomButtonBlur: null,
}

const getRandomImageUrl = () => {
	const randomId = Math.trunc(Math.random() * 2000)
	return `https://picsum.photos/id/${randomId}/300/300`
}

function RandomPhoto({ name, imageUrl, onImageUrlChange, onRandomButtonBlur }) {
	console.log({ name, imageUrl, onImageUrlChange, onRandomButtonBlur })

	const handleRandomPhotoClick = async () => {
		console.log('hehe')

		if (onImageUrlChange) {
			const randomImageUrl = getRandomImageUrl()
			onImageUrlChange(randomImageUrl)
		}
	}

	return (
		<>
			<div>
				<Button
					type='button'
					outline
					color='primary'
					name={name}
					onClick={handleRandomPhotoClick}
					onBlur={onRandomButtonBlur}
				>
					Random a photo
				</Button>
			</div>
			<div>
				{imageUrl && (
					<img
						className='h-[200px] w-[200px] object-cover'
						src={imageUrl}
						alt='Oops ... not found. Please click random again!'
					/>
				)}
			</div>
		</>
	)
}

export default RandomPhoto
