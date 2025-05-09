import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Employee from './Employee'
import { EmployeeType } from './types'

interface IndexProps {
  employees: EmployeeType[]
  flash: { notice?: string }
}

export default function Index({ employees, flash }: IndexProps) {
  return (
    <>
      <Head title="Employees" />

      <div className="mx-auto md:w-6xl w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-bold text-4xl">Employees</h1>
          <Link
            href="/employees/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New employee
          </Link>
        </div>

        <div className="min-w-full grid grid-cols-3 gap-2">
          {employees.map((employee) => (
            <Fragment key={employee.id}>
              <div className="shadow rounded-md p-5 mb-5">
                <Employee employee={employee} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
