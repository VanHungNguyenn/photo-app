import userApi from '@/api/userApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getMe = createAsyncThunk(
	'user/getMe',
	async (params, thunkApi) => {
		// thunkApi.dispatch()

		const currentUser = await userApi.getMe()
		return currentUser
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState: {
		current: {},
		loading: false,
		error: '',
	},
	reducers: {},
	builder: (builder) => {
		builder.addCase(getMe.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getMe.rejected, (state, action) => {
			state.loading = false
			state.error = action.error
		})
		builder.addCase(getMe.fulfilled, (state, action) => {
			state.loading = false
			state.current = action.payload
		})
	},
})

export const { actions, reducer } = userSlice
export default reducer
