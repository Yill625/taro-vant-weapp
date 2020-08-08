/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const list = (name) => {
  return HTTPREQUEST.post('/api/list', { name })
}

export const detail = (url) => {
  return HTTPREQUEST.post('/api/detail', { url })
}

export const girl = () => {
  return HTTPREQUEST.post('/api/girl')
}
