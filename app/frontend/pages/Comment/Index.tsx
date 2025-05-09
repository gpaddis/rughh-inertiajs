import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Comment from './Comment'
import { CommentType } from './types'

interface IndexProps {
  comments: CommentType[]
  flash: { notice?: string }
}

export default function Index({ comments, flash }: IndexProps) {
  return (
    <>
      <Head title="Comments" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Comments</h1>
          <Link
            href="/comments/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New comment
          </Link>
        </div>

        <div className="min-w-full">
          {comments.map((comment) => (
            <Fragment key={comment.id}>
              <Comment comment={comment} />
              <p>
                <Link
                  href={`/comments/${comment.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this comment
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
