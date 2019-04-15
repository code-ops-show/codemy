export type PostType = {
  id: number
  slug: string
  title: string
  description: string
  duration: number
  cover_picture_url: string
  published_at: Date
  media: Array<any>
}