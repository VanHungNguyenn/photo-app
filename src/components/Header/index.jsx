import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='header border-b border-gray-200 shadow-sm'>
			<div className='max-w-[1200px] mx-auto my-4 flex items-center justify-between'>
				<Link to='/photos' className='font-bold text-[20px] text-black'>
					Photo App
				</Link>
				<NavLink
					className={(navData) => {
						if (navData.isActive) {
							return 'font-bold text-[20px] text-blue-600'
						}
						return 'font-bold text-[20px] text-black'
					}}
					to='/sign-in'
					end
				>
					Sign In
				</NavLink>
			</div>
		</header>
	)
}

export default Header
