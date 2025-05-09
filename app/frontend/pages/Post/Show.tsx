import { Head, Link, WhenVisible } from '@inertiajs/react'
import { PostType } from './types'

interface ShowProps {
  post: PostType
  flash: { notice?: string }
}

export default function Show({ post, flash }: ShowProps) {
  return (
    <>
      <Head title={`Post #${post.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl mb-5">{post.title?.toString()}</h1>

          <p>{post.body?.toString()}</p>

          <Link
            href={`/posts/${post.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this post
          </Link>
          <Link
            href="/posts"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to posts
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/posts/${post.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this post
            </Link>
          </div>

          <h2 className="font-bold text-2xl mt-5 mb-2">Comments</h2>
          <WhenVisible data="comments" fallback={<div>Loading comments...</div>}>
            <div className="mt-5">
              {post.comments?.map((comment) => (
                <div key={comment.id} className="mb-5">
                  <p className="text-xs">Comment #{comment.id}</p>
                  <p>{comment.body?.toString()}</p>
                </div>
              ))}
            </div>
          </WhenVisible>
        </div>
      </div>
    </>
  )
}
