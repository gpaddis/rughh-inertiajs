import { Head, WhenVisible } from '@inertiajs/react'
import { Fragment } from 'react'
import Employee from '../Employee/Employee'
import { EmployeeType } from '../Employee/types'
import Navbar from '../Layout/Navbar'
import Post from '../Post/Post'
import { PostType } from '../Post/types'

interface LoadWhenVisibleProps {
  employees: EmployeeType[]
  posts: PostType[]
}

export default function LoadWhenVisible({ employees, posts }: LoadWhenVisibleProps) {
  return (
    <>
      <Head title="Our Team" />

      <div className="mx-auto md:w-4xl lg:w-6xl w-full px-8 pt-8">
        <div className="mx-auto pb-8 justify-center items-center w-full text-center">
          <Navbar />
        </div>

        <div className="mb-4 text-xl">
          <p className="mb-2">Inertia supports <strong>lazy loading data on scroll</strong> using the Intersection Observer API. It provides the WhenVisible component as a convenient way to load data when an element becomes visible in the viewport.</p>

          <p className="mb-2">The WhenVisible component accepts a data prop that specifies the key of the prop to load. It also accepts a fallback prop that specifies a component to render while the data is loading. The WhenVisible component should wrap the component that depends on the data.</p>
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

        <WhenVisible data="posts" buffer={500} fallback={<div className="text-xl text-center mb-10">Loading...</div>}>
          <div className="min-w-full">
            {posts?.map((post) => (
              <Fragment key={post.id}>
                <Post post={post} />
              </Fragment>
            ))}
          </div>
        </WhenVisible>
      </div>
    </>
  )
}
