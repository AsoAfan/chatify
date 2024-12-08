import axios from 'axios'
import { useLocalStorage } from '@/composables/useLocalStorage'

const ls = useLocalStorage()
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

export const web = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  withXSRFToken: true,
})

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 2000,
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
    Authorization: `Bearer ${ls.getToken()}`,
  },
})
