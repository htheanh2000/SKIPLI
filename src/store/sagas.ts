import { call, Effect, put, takeEvery } from 'redux-saga/effects'
import {CreateNewAccessCode, ValidateAccessCode} from '../api/authentication'
import {CREATE_ACCESS_CODE_FULFILED, CREATE_ACCESS_CODE_FAILED, CREATE_ACCESS_CODE_PENDING} from './features/auth/authSlice';
import {VERIFY_ACCESS_CODE_FULFILED, VERIFY_ACCESS_CODE_FAILED, VERIFY_ACCESS_CODE_PENDING} from './features/auth/verifySlice';
import {SEARCH_GITHUB_PENDING, SEARCH_GITHUB_FAILED, SEARCH_GITHUB_FULFILED,
   CHANGE_FAVORITE_GITHUB_USER_PENDING, CHANGE_FAVORITE_GITHUB_USER_FAILED, CHANGE_FAVORITE_GITHUB_USER_FULFILED} from './features/github/githubSlice';
import {router} from '../router'
import { searchGithubUser, updateFavoriteUser } from '../api/github';

function* createUserSaga(action: Action) {
   try {
      // START CALL API
      yield put({type: CREATE_ACCESS_CODE_PENDING});
      yield call(CreateNewAccessCode, action.payload);
      
      yield put({type: CREATE_ACCESS_CODE_FULFILED, payload: action.payload});
      router.navigate('/verify');
   } catch (e) {
      yield put({type: CREATE_ACCESS_CODE_FAILED, message: e});
   }
}

function* verifyUserSaga(action: Action) {
   try {
      // START CALL API
      yield put({type: VERIFY_ACCESS_CODE_PENDING});
      yield call(ValidateAccessCode, action.payload);
      yield put({type: VERIFY_ACCESS_CODE_FULFILED});
      yield router.navigate('/dashboard');
   } catch (e) {
      yield put({type: VERIFY_ACCESS_CODE_FAILED, message: e});
   }
}



function* fetchGithubUserSaga(action: Action):  Generator<Effect, void, any> {
   try {
      // START CALL API
      yield put({type: SEARCH_GITHUB_PENDING, payload: action.payload});
      const response = yield call(searchGithubUser, action.payload);
      
      yield put({type: SEARCH_GITHUB_FULFILED, payload: response.data});
   } catch (e) {
      yield put({type: SEARCH_GITHUB_FAILED, message: e});
   }
}

function* updateFavoriteUserSaga(action: Action):  Generator<Effect, void, any> {
   try {
      // START CALL API
      yield put({type: CHANGE_FAVORITE_GITHUB_USER_PENDING, payload: action.payload});
      const response = yield call(updateFavoriteUser, action.payload);
      
      yield put({type: CHANGE_FAVORITE_GITHUB_USER_FULFILED, payload: response.data});
   } catch (e) {
      yield put({type: CHANGE_FAVORITE_GITHUB_USER_FAILED, message: e});
   }
}

type Action = {
    type: string;
    payload: never;
}

function* mySaga() {
  yield takeEvery("CREATE_ACCESS_CODE", createUserSaga);
  yield takeEvery("VERIFY_ACCESS_CODE", verifyUserSaga);
  yield takeEvery("SEARCH_GITHUB_USER", fetchGithubUserSaga);
  yield takeEvery("UPDATE_FAVORITE_GITHUB_USER", updateFavoriteUserSaga);
}


export default mySaga