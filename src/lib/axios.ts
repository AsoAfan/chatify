import axios from 'axios'
import { useLocalStorage } from '@/composables/useLocalStorage'
import router from '@/router'

const ls = useLocalStorage()
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

export const web = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  withXSRFToken: true,
})

export const webAuth = axios.create({
  ...web.defaults,
  headers: {
    ...web.defaults.headers,
    Authorization: `Bearer ${ls.getToken()}`,
  },
})

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  // timeout: 2000,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const auth = axios.create({
  ...api.defaults,
  headers: {
    ...api.defaults.headers,
    // Authorization: `Bearer ${ls.getToken()}`,
  },
})

auth.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${ls.getToken()}`
    return config
  },
  (e) => {
    router.push({ name: 'login' })
    return Promise.reject(e)
  },
)

auth.interceptors.response.use(
  (response) => {
    return response
  },
  (e) => {
    const { removeToken } = useLocalStorage()
    if (e.status == 401) {
      removeToken()
      router.push({ name: 'login' })
    }
    return Promise.reject(e)
  },
)
