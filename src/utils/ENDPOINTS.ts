export const ENDPOINTS = {
  Signup: '/signup',
  Login: '/login',
  GetUser: '/user',
  Logout: '/logout',
  Search: (s: string) => `/users/search?s=${s}`,
  CreateChat: '/conversation',
  SendMessage: '/message',
}
