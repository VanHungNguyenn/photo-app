import React from 'react'
import Images from '@/contants/images'

const Banner = ({ title, backgroundUrl = Images.ORANGE_BG }) => {
	const bannerStyle = backgroundUrl
		? { backgroundImage: `url(${backgroundUrl})` }
		: {}

	return (
		<section
			style={bannerStyle}
			className='banner bg-no-repeat bg-cover bg-center relative h-[15rem]'
		>
			<h1 className='text-center text-4xl font-bold text-white py-20 opacity-80'>
				{title}
			</h1>
		</section>
	)
}

export default Banner
