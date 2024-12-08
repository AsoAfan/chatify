export const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }

  const getItem = (key: string) => {
    return localStorage.getItem(key)
  }

  const removeItem = (key: string) => {
    localStorage.removeItem(key)
  }

  const hasItem = (key: string) => {
    return localStorage.getItem(key) !== null
  }

  const hasToken = () => {
    return hasItem('token')
  }

  const setToken = (token: string) => {
    setItem('token', token)
  }

  const getToken = () => {
    console.log('From local storage', getItem('token'))
    return getItem('token')
  }

  const removeToken = () => {
    localStorage.removeItem('token')
  }

  return {
    setItem,
    getItem,
    removeItem,
    hasItem,
    hasToken,
    setToken,
    getToken,
    removeToken,
  }
}
