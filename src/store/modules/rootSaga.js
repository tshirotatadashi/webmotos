import { all } from 'redux-saga/effects'

import vehicles from './vehicles/sagas'

export default function* rootSaga() {
  return yield all([vehicles])
}
