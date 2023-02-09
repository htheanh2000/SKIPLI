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
    'CREATE_ACCESS_CODE_FULFILED': (state, action: PayloadAction<string>) => {
      state.loading = false
      state.err = null
      state.user = action.payload
    },
    'CREATE_ACCESS_CODE_FAILED': (state, action: PayloadAction<unknown>) => {
      
      state.loading = false
      state.err = action
    },
    'CREATE_ACCESS_CODE_PENDING': (state) => {
      state.loading = true
      state.err = null
    }
  },
})

export const { CREATE_ACCESS_CODE_PENDING, CREATE_ACCESS_CODE_FAILED, CREATE_ACCESS_CODE_FULFILED } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value

export default authSlice.reducer

