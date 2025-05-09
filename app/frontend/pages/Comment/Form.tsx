import { useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import { CommentFormType, CommentType } from './types'

// Temporary fix for InertiaFormProps not being exported from @inertiajs/react
type InertiaFormProps<TForm extends Record<string, any>> = ReturnType<typeof useForm<TForm>>

interface FormProps {
  comment: CommentType
  onSubmit: (form: InertiaFormProps<CommentFormType>) => void
  submitText: string
}

export default function Form({ comment, onSubmit, submitText }: FormProps) {
  const form = useForm<CommentFormType>({
    post_id: comment.post_id,
    body: comment.body,
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="post">Post</label>
        <input
          type="text"
          name="post"
          id="post"
          value={data.post_id}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('post_id', e.target.value)}
        />
        {errors.post_id && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.post_id}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          value={data.body}
          rows={4}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('body', e.target.value)}
        />
        {errors.body && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.body}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
