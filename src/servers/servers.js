/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const list = () => {
  return HTTPREQUEST.get('/api/list')
}

export const detail = (url) => {
  return HTTPREQUEST.post('/api/detail', { url })
}
