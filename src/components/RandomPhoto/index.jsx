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

const getRandomImageUrl = async () => {
	const randomId = Math.trunc(Math.random() * 2000)
	let url = `https://picsum.photos/id/${randomId}/300/300`

	await fetch(url).then((response) => {
		if (!response.ok) {
			url = getRandomImageUrl()
		}
	})

	return url
}

function RandomPhoto({ name, imageUrl, onImageUrlChange, onRandomButtonBlur }) {
	const handleRandomPhotoClick = async () => {
		if (onImageUrlChange) {
			const randomImageUrl = await getRandomImageUrl()

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
					className='mb-3'
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
