import { EmployeeType } from './types'
import { Link } from '@inertiajs/react'

interface EmployeeProps {
  employee: EmployeeType
}

export default function Employee({ employee }: EmployeeProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link href={`/employees/${employee.id}`}>
          <h2 className="block font-semibold text-2xl mb-1">{employee.name?.toString()}</h2>
          <p className="my-5">{employee.role?.toString()}</p>
        </Link>

        <p className="my-5">
          <img src={`https://i.pravatar.cc/150?u=${employee.id}`} alt="Avatar" className="w-12 h-12 rounded-full" />
        </p>
      </div>

      <p className={`text-xs font-medium ${employee.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>{employee.status}</p>
    </div>
  )
}
