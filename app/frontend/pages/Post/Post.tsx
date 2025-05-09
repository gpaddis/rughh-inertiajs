import { Link } from '@inertiajs/react'
import { PostType } from './types'

interface PostProps {
  post: PostType
}

export default function Post({ post }: PostProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-semibold text-2xl mb-1">
          <Link href={`/posts/${post.id}`}>
            {post.title?.toString()}
          </Link>
        </strong>
      </p>
      <p className="my-5">
        {post.body?.toString()}
      </p>

      <p className="text-right">{post.comments?.length || 0} comments</p>
    </div>
  )
}
