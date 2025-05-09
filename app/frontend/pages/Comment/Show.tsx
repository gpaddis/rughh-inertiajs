import { Head, Link } from '@inertiajs/react'
import Comment from './Comment'
import { CommentType } from './types'

interface ShowProps {
  comment: CommentType
  flash: { notice?: string }
}

export default function Show({ comment, flash }: ShowProps) {
  return (
    <>
      <Head title={`Comment #${comment.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Comment #{comment.id}</h1>

          <Comment comment={comment} />

          <Link
            href={`/comments/${comment.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this comment
          </Link>
          <Link
            href="/comments"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to comments
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/comments/${comment.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this comment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
