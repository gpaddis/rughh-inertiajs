import { CommentType } from './types'

interface CommentProps {
  comment: CommentType
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Post:</strong>
        {comment.post_id?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Body:</strong>
        {comment.body?.toString()}
      </p>
    </div>
  )
}
