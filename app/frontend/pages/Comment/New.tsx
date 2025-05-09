import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { CommentType } from './types'

interface NewProps {
  comment: CommentType
}

export default function New({ comment }: NewProps) {
  return (
    <>
      <Head title="New comment" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New comment</h1>

        <Form
          comment={comment}
          onSubmit={(form) => {
            form.transform((data) => ({ comment: data }))
            form.post('/comments')
          }}
          submitText="Create Comment"
        />

        <Link
          href="/comments"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to comments
        </Link>
      </div>
    </>
  )
}
