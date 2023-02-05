import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {CreateNewAccessCode, CreateNewAccessCodeProps} from '../api/authentication'

function* fetchUser(action: Action) {
   try {
    console.log("Star Saga");
    
      const user:Promise<CreateNewAccessCodeProps>  = yield call(CreateNewAccessCode, action.payload);
      yield put({type: "USER_CREATE_NEW_ACCESS_CODE_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_CREATE_NEW_ACCESS_CODE_FAILED", message: e});
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