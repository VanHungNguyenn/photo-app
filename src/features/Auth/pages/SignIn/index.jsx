import React from 'react'
import PropTypes from 'prop-types'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const uiConfig = {
	signInFlow: 'redirect',
	signInSuccessUrl: '/photos',

	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

function SignIn(props) {
	return (
		<div>
			<div className='text-center py-10'>
				<h1 className='text-4xl font-bold text-gray-900 mb-3'>
					Login Form
				</h1>
				<p>or login with social accounts</p>
			</div>
			<StyledFirebaseAuth
				uiConfig={uiConfig}
				firebaseAuth={firebase.auth()}
			/>
		</div>
	)
}

SignIn.propTypes = {}

export default SignIn
