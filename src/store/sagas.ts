import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {CreateNewAccessCode, CreateNewAccessCodeProps} from '../api/authentication'
import {REQUEST_CODE_SUCCEEDED, REQUEST_CODE_FAILED, REQUEST_CODE_PENDING} from './features/auth/authSlice';
function* fetchUser(action: Action) {
   try {
      // START CALL API
      yield put({type: REQUEST_CODE_PENDING});
      yield call(CreateNewAccessCode, action.payload);
      yield put({type: REQUEST_CODE_SUCCEEDED});
   } catch (e) {
      yield put({type: REQUEST_CODE_FAILED, message: e});
   }
}

type Action = {
    type: string;
    payload: CreateNewAccessCodeProps;
}

function* mySaga() {
  yield takeEvery("USER_CREATE_NEW_ACCESS_CODE", fetchUser);
}


export default mySaga