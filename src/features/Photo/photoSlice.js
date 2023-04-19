import { createSlice } from '@reduxjs/toolkit'

const photo = createSlice({
	name: 'photos',
	initialState: [],
	reducers: {
		addPhoto: (state, action) => {
			state.push(action.payload)
		},
	},
})

const { actions, reducer } = photo
export const { addPhoto } = actions
export default reducer
