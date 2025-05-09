import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { EmployeeType } from './types'

interface EditProps {
  employee: EmployeeType
}

export default function Edit({ employee }: EditProps) {
  return (
    <>
      <Head title="Editing employee" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing employee</h1>

        <Form
          employee={employee}
          onSubmit={(form) => {
            form.transform((data) => ({ employee: data }))
            form.patch(`/employees/${employee.id}`)
          }}
          submitText="Update Employee"
        />

        <Link
          href={`/employees/${employee.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this employee
        </Link>
        <Link
          href="/employees"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to employees
        </Link>
      </div>
    </>
  )
}
