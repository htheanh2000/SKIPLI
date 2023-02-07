import { applyMiddleware, configureStore} from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import authSlice from './features/auth/authSlice'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import verifySlice from './features/auth/verifySlice'

const sagaMiddleware = createSagaMiddleware()

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });


export const store = configureStore({
  reducer: {
    counter : counterSlice,
    user: authSlice,
    code: verifySlice,
    router: routerReducer
  },
  middleware: [sagaMiddleware, routerMiddleware]
})

sagaMiddleware.run(mySaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const history = createReduxHistory(store);
