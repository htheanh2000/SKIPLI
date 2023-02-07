import { applyMiddleware, combineReducers, configureStore} from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import authSlice from './features/auth/authSlice'
import githubSlice from './features/github/githubSlice'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import verifySlice from './features/auth/verifySlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};


const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const reducers = combineReducers({
  counter : counterSlice,
  user: authSlice,
  code: verifySlice,
  github: githubSlice,
  router: routerReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, routerMiddleware]
})

sagaMiddleware.run(mySaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const history = createReduxHistory(store);
