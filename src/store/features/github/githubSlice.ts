import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../..'

// Define a type for the slice state
interface githubState {
  searchQuery: SearchQuery,
  data: User[],
  loading: boolean,
  err: unknown,
  total_count: number
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
  isLiked: boolean;
}

interface SearchQuery { 
  q: string,
  page: number,
  per_page: number
}

// Define the initial state using that type
const initialState: githubState = {
    searchQuery: { // use for caching data.
    q: '',
    page: 1,
    per_page: 5
  },
    data: [],
    loading: false,
    err: null,
    total_count: 0
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
      state.total_count = action.payload.total_count
    },
    'SEARCH_GITHUB_FAILED': (state: githubState, action: PayloadAction<unknown>) => {
      console.log("SEARCH_GITHUB_FAILED");
      state.loading = false
      state.err = action
    },
    'SEARCH_GITHUB_PENDING': (state: githubState, action: PayloadAction<SearchQuery>) => {
      console.log("SEARCH_GITHUB_PENDING");
      state.loading = true
      state.err = null
      state.searchQuery = action.payload
    },

    //CHANGE_FAVORITE_GITHUB_USER
    'CHANGE_FAVORITE_GITHUB_USER_FULFILED': (state: githubState, action: PayloadAction<any>) => {
      console.log("CHANGE_FAVORITE_GITHUB_USER_FULFILED", action.payload)
      state.loading = false
      state.err = null
    },
    'CHANGE_FAVORITE_GITHUB_USER_FAILED': (state: githubState, action: PayloadAction<unknown>) => {
      console.log("CHANGE_FAVORITE_GITHUB_USER_FAILED");
      state.loading = false
      state.err = action
    },
    'CHANGE_FAVORITE_GITHUB_USER_PENDING': (state: githubState, action: PayloadAction<{github_user_id: number}>) => {
      console.log("CHANGE_FAVORITE_GITHUB_USER_PENDING", action.payload);
      state.loading = true
      state.err = null
      console.log("state.data", state.data);
      state.data = state.data.map(item => {
        if(action.payload.github_user_id != item.id) return item
        return {
          ...item,
          isLiked: !item.isLiked
        }
      })
    }
  },
})

export const {
   SEARCH_GITHUB_PENDING, SEARCH_GITHUB_FAILED, SEARCH_GITHUB_FULFILED,
  CHANGE_FAVORITE_GITHUB_USER_PENDING, CHANGE_FAVORITE_GITHUB_USER_FAILED, CHANGE_FAVORITE_GITHUB_USER_FULFILED 
} = githubSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value

export default githubSlice.reducer

