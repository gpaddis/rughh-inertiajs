import { CommentType } from "../Comment/types"

export interface PostType {
  id: number
  title: string
  body: string
  comments: CommentType[]
}

export type PostFormType = Omit<PostType, 'id'>
