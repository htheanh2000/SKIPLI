import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../..'

// Define a type for the slice state
interface githubState {
  searchQuery: { // use for caching data.
    q: string,
    page: 1,
    per_page: number
  },
  data: User[],
  loading: boolean,
  err: unknown,
}

interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

// Define the initial state using that type
const initialState: githubState = {
    searchQuery: { // use for caching data.
    q: '',
    page: 1,
    per_page: 20
  },
    data: [],
    loading: false,
    err: null
}


export const githubSlice = createSlice({
  name: 'github',
  // `githubSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    'SEARCH_GITHUB_FULFILED': (state: githubState, action: PayloadAction<any>) => {
      console.log("SEARCH_GITHUB_FULFILED", action.payload)
      state.loading = false
      state.err = null
      state.data = action.payload.items
    },
    'SEARCH_GITHUB_FAILED': (state: githubState, action: PayloadAction<unknown>) => {
      console.log("SEARCH_GITHUB_FAILED");
      state.loading = false
      state.err = action
    },
    'SEARCH_GITHUB_PENDING': (state: githubState) => {
      console.log("SEARCH_GITHUB_PENDING");
      state.loading = true
      state.err = null
    }
  },
})

export const { SEARCH_GITHUB_PENDING, SEARCH_GITHUB_FAILED, SEARCH_GITHUB_FULFILED } = githubSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value

export default githubSlice.reducer

