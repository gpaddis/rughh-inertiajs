import { Head, Link } from '@inertiajs/react'
import Employee from './Employee'
import { EmployeeType } from './types'

interface ShowProps {
  employee: EmployeeType
  flash: { notice?: string }
}

export default function Show({ employee, flash }: ShowProps) {
  return (
    <>
      <Head title={`Employee #${employee.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <Employee employee={employee} />

          <Link
            href={`/employees/${employee.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this employee
          </Link>
          <Link
            href="/employees"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to employees
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/employees/${employee.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this employee
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
