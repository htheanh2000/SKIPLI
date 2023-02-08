import { call, Effect, put, takeEvery } from 'redux-saga/effects'
import {CreateNewAccessCode, ValidateAccessCode} from '../api/authentication'
import {CREATE_ACCESS_CODE_FULFILED, CREATE_ACCESS_CODE_FAILED, CREATE_ACCESS_CODE_PENDING} from './features/auth/authSlice';
import {VERIFY_ACCESS_CODE_FULFILED, VERIFY_ACCESS_CODE_FAILED, VERIFY_ACCESS_CODE_PENDING} from './features/auth/verifySlice';
import {SEARCH_GITHUB_FULFILED, SEARCH_GITHUB_FAILED, SEARCH_GITHUB_PENDING} from './features/github/githubSlice';
import {router} from '../router'
import { searchGithubUser } from '../api/github';

function* createUser(action: Action) {
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

function* verifyUser(action: Action) {
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



function* fetchGithubUser(action: Action):  Generator<Effect, void, any> {
   try {
      // START CALL API
      yield put({type: SEARCH_GITHUB_PENDING, payload: action.payload});
      const response = yield call(searchGithubUser, action.payload);
      
      yield put({type: SEARCH_GITHUB_FULFILED, payload: response.data});
   } catch (e) {
      yield put({type: SEARCH_GITHUB_FAILED, message: e});
   }
}

type Action = {
    type: string;
    payload: never;
}

function* mySaga() {
  yield takeEvery("CREATE_ACCESS_CODE", createUser);
  yield takeEvery("VERIFY_ACCESS_CODE", verifyUser);
  yield takeEvery("SEARCH_GITHUB_USER", fetchGithubUser);
}


export default mySaga