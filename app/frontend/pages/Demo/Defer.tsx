import { Fragment } from 'react'
import { Head } from '@inertiajs/react'
import { EmployeeType } from '../Employee/types'
import Employee from '../Employee/Employee'

interface DeferProps {
  employees: EmployeeType[]
}

export default function Defer({ employees }: DeferProps) {
  return (
    <>
      <Head title="Our Team" />

      <div className="mx-auto md:w-6xl w-full px-8 pt-8">
        <div className="mb-4 text-lg italic">
          <p>Let's have a look at how we can defer loading of some of the props on this page.</p>

          <p>Inertia's deferred props feature allows you to defer the loading of certain page data until after the initial page render. This can be useful for improving the perceived performance of your app by allowing the initial page render to happen as quickly as possible.</p>
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
      </div>
    </>
  )
}
