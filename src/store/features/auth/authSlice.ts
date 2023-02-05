import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../..'

// Define a type for the slice state
interface UserState {
  user: string,
  token: string,
  loading: boolean,
  err: unknown,
}

// Define the initial state using that type
const initialState: UserState = {
    user: '',
    token: '',
    loading: false,
    err: null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    'REQUEST_CODE_SUCCEEDED': (state) => {
      console.log("REQUEST_CODE_SUCCEEDED")
      state.loading = false
      state.err = null
    },
    'REQUEST_CODE_FAILED': (state, action: PayloadAction<unknown>) => {
      console.log("REQUEST_CODE_FAILED");
      
      state.loading = false
      state.err = action
    },
    'REQUEST_CODE_PENDING': (state) => {
      console.log("REQUEST_CODE_PENDING");
      state.loading = true
      state.err = null
    }
  },
})

export const { REQUEST_CODE_SUCCEEDED, REQUEST_CODE_FAILED, REQUEST_CODE_PENDING } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value

export default authSlice.reducer

