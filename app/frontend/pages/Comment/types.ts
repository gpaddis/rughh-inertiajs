export interface CommentType {
  id: number
  post_id: string
  body: string
}

export type CommentFormType = Omit<CommentType, 'id'>
