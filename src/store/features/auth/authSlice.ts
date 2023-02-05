import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../..'

// Define a type for the slice state
interface UserState {
  user: string,
  token: string,
}

// Define the initial state using that type
const initialState: UserState = {
    user: '',
    token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    'USER_CREATE_NEW_ACCESS_CODE_SUCCEEDED': (state, action: PayloadAction<string>) => {
      state.user = action.payload
    },
  },
})

export const { USER_CREATE_NEW_ACCESS_CODE_SUCCEEDED } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value

export default authSlice.reducer

