import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Post from './Post'
import { PostType } from './types'
import Navbar from '../Layout/Navbar'
import Infobox from '../Layout/Infobox'

interface IndexProps {
  posts: PostType[]
  flash: { notice?: string }
}

export default function Index({ posts, flash }: IndexProps) {
  return (
    <>
      <Head title="Posts" />
      <div className="mx-auto md:w-4xl lg:w-6xl w-full px-8 pt-8">
        <div className="mx-auto pb-8 justify-center items-center w-full text-center">
          <Navbar />
        </div>

        <Infobox>
          <p>Since working with forms is so common, Inertia includes a <strong>form helper</strong> designed to help reduce the amount of boilerplate code needed for handling typical form submissions.</p>
        </Infobox>

        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Posts</h1>
          <Link
            href="/posts/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New post
          </Link>
        </div>

        <div className="min-w-full">
          {posts.map((post) => (
            <Fragment key={post.id}>
              <Post post={post} />
              <p>
                <Link
                  href={`/posts/${post.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this post
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
