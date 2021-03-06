import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 7 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function jwtDecode(token) {
    return jwt_decode(token)
}
