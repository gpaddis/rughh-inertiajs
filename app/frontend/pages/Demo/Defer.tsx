import { Deferred, Head } from '@inertiajs/react'
import { Fragment } from 'react'
import Employee from '../Employee/Employee'
import { EmployeeType } from '../Employee/types'
import Post from '../Post/Post'
import { PostType } from '../Post/types'

interface DeferProps {
  employees: EmployeeType[]
  posts: PostType[]
}

export default function Defer({ employees, posts }: DeferProps) {
  return (
    <>
      <Head title="Our Team" />

      <div className="mx-auto md:w-6xl w-full px-8 pt-8">
        <div className="mb-4 text-xl">
          <p>Inertia's deferred props feature allows you to <strong>defer the loading of certain page data</strong> until after the initial page render.</p>

          <p>This can be useful for improving the perceived performance of your app by allowing the initial page render to happen as quickly as possible.</p>
        </div>

        <div className="flex justify-center items-center mb-12">
          <h1 className="font-bold text-4xl">Our Team</h1>
        </div>

        <div className="min-w-full grid grid-cols-3 gap-3">
          {employees.map((employee) => (
            <Fragment key={employee.id}>
              <div className="shadow-md rounded-md p-5 mb-5">
                <Employee employee={employee} />
              </div>
            </Fragment>
          ))}
        </div>

        <div className="flex justify-center items-center my-12">
          <h1 className="font-bold text-4xl">Our Blog</h1>
        </div>

        <Deferred data="posts" fallback={<div className="text-xl text-center mb-10">Loading...</div>}>
          <div className="min-w-full">
            {posts?.map((post) => (
              <Fragment key={post.id}>
                <Post post={post} />
              </Fragment>
            ))}
          </div>
        </Deferred>
      </div>
    </>
  )
}
