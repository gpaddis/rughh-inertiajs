import { Head, Link } from '@inertiajs/react'
import Employee from '../Employee/Employee'
import { EmployeeType } from '../Employee/types'
import Navbar from '../Layout/Navbar'
import Infobox from '../Layout/Infobox'

interface PrefetchProps {
    employee: EmployeeType
}

export default function Prefetch({ employee }: PrefetchProps) {
    return (
        <>
            <Head title="Our Team" />

            <div className="mx-auto md:w-4xl lg:w-6xl w-full px-8 pt-8">
                <div className="mx-auto pb-8 justify-center items-center w-full text-center">
                    <Navbar />
                </div>

                <Infobox>
                    <p className="mb-2">
                        Inertia supports prefetching data for pages that are likely to be visited next. This can be useful for improving the perceived performance of your app by allowing the data to be fetched in the background while the user is still interacting with the current page.
                    </p>
                </Infobox>


                <div className="flex justify-center items-center mb-12">
                    <h1 className="font-bold text-4xl">Employee Gallery</h1>
                </div>

                <div className="flex justify-center items-center mb-12">
                    <Link
                        href={`/demo/prefetch?employee_id=${employee.id + 1}`}
                        className="rounded-lg py-3 px-5 bg-gray-200 hover:bg-gray-300 inline-block font-medium"
                        preserveScroll
                        prefetch
                    >
                        Next employee
                    </Link>
                </div>

                <div className="flex flex-col justify-center items-center mb-10 min-w-1/2 p-5">
                    <h2 className="block font-semibold text-2xl mb-4">{employee.name?.toString()}</h2>
                    <img src={`https://i.pravatar.cc/150?u=${employee.id}`} alt="Avatar" className="w-24 h-24 rounded-full" />

                    <Link href={`/employees/${employee.id}`}>
                        <p className="my-2">{employee.role?.toString()}</p>
                    </Link>

                    <p className={`text-xs font-medium ${employee.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>{employee.status}</p>
                </div>
            </div>
        </>
    )
}
