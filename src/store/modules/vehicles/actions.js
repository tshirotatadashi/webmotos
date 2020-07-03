import * as branchTypes from './constants'

export const getRequest = (data) => ({ type: branchTypes.GET.REQUEST, data })
export const getSuccess = (data) => ({ type: branchTypes.GET.SUCCESS, data })
export const getFailure = (data) => ({ type: branchTypes.GET.FAILURE, data })
