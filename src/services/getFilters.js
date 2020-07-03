import api from './api'

export const getMake = () => {
  return new Promise((resolve, reject) => {
    api
      .get('OnlineChallenge/Make')
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export const getModel = id => {
  return new Promise((resolve, reject) => {
    api
      .get(`OnlineChallenge/Model?MakeID=${id}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export const getVersion = id => {
  return new Promise((resolve, reject) => {
    api
      .get(`OnlineChallenge/Version?ModelID=${id}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
