export interface SignupForm {
  username: string
  email: string
  password: string
  password_confirmation: string
  profile_image: File | null
}

export interface LoginForm {
  username: string
  password: string
}
