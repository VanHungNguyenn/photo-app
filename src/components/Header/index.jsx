import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header'>
			<div className='max-w-[1200px] mx-auto my-4 flex items-center justify-between'>
				<a
					href='https://www.facebook.com/vanhung.dev'
					className='font-bold text-[20px] text-black'
					target='_blank'
					rel='noopener noreferrer'
				>
					Photo App
				</a>
				<NavLink
					className={(navData) => {
						if (navData.isActive) {
							return 'font-bold text-[20px] text-blue-600'
						}
						return 'font-bold text-[20px] text-black'
					}}
					to='/photos'
					end
				>
					Redux Project
				</NavLink>
			</div>
		</header>
	)
}

export default Header
