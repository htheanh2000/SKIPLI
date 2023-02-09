import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../..'

// Define a type for the slice state
interface VerifyState {
  loading: boolean,
  err: unknown,
}

// Define the initial state using that type
const initialState: VerifyState = {
    loading: false,
    err: null
}
export const authSlice = createSlice({
  name: 'auth',
  // `VERIFYSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    'VERIFY_ACCESS_CODE_FULFILED': (state: VerifyState) => {
      state.loading = false
      state.err = null
    },
    'VERIFY_ACCESS_CODE_FAILED': (state: VerifyState, action: PayloadAction<unknown>) => {
      state.loading = false
      state.err = action
    },
    'VERIFY_ACCESS_CODE_PENDING': (state: VerifyState) => {
      state.loading = true
      state.err = null
    }
  },
})

export const { VERIFY_ACCESS_CODE_PENDING, VERIFY_ACCESS_CODE_FAILED, VERIFY_ACCESS_CODE_FULFILED } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value

export default authSlice.reducer

