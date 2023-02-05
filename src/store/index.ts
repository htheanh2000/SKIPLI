import { applyMiddleware, configureStore} from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import authSlice from './features/auth/authSlice'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter : counterSlice,
    user: authSlice
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(mySaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

