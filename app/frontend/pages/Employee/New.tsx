import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { EmployeeType } from './types'

interface NewProps {
  employee: EmployeeType
}

export default function New({ employee }: NewProps) {
  return (
    <>
      <Head title="New employee" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New employee</h1>

        <Form
          employee={employee}
          onSubmit={(form) => {
            form.transform((data) => ({ employee: data }))
            form.post('/employees')
          }}
          submitText="Create Employee"
        />

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
