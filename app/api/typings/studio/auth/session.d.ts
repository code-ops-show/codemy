type UserType = {
  id: number
  uid: string
  name: string
  username: string
  email: string
  confirmed_at: string
  created_at: string
  subscription: {
    status: string
  }
  notify_settings: {
    new_message: boolean
    replied_message: boolean
    published_post: boolean
  }
}

export type SessionType = {
  user: UserType
  jwt: string
}