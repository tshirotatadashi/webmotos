import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as constants from './constants'
import api from '../../../services/api'

import { getSuccess, getFailure } from './actions'

const ROUTE = '/OnlineChallenge'

function* get({ data: id }) {
  try {
    const { data } = yield call(api, `${ROUTE}/Vehicles?Page=${id}`)
    yield put(getSuccess(data))
  } catch (err) {
    yield put(getFailure(err))
  }
}

export default all([takeLatest(constants.GET.REQUEST, get)])
