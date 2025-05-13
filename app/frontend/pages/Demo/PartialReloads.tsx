import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Employee from '../Employee/Employee'
import { EmployeeType } from '../Employee/types'
import Navbar from '../Layout/Navbar'
import Infobox from '../Layout/Infobox'

interface PartialReloadsProps {
    current_user: EmployeeType
    employees: EmployeeType[]
}

export default function PartialReloads({ current_user, employees }: PartialReloadsProps) {
    return (
        <>
            <Head title="Partial reloads" />

            <div className="mx-auto md:w-4xl lg:w-6xl w-full px-8 pt-8">
                <div className="mx-auto pb-8 justify-center items-center w-full text-center">
                    <Navbar />
                </div>

                <Infobox>
                    <p className="mb-2">
                        When making visits to the same page you are already on, it's not always necessary to re-fetch all of the page's data from the server.
                        In fact, selecting only a subset of the data can be a helpful performance optimization if it's acceptable that some page data becomes stale.
                    </p>
                    <p className="mb-2 font-semibold">
                        Inertia makes this possible via its "partial reload" feature.
                    </p>

                    <p>
                        Bonus: when using an Inertia link, you can preserve the scroll position using the <em>preserveScroll</em> prop.
                    </p>
                </Infobox>

                <div className="text-right">
                    <p>Current User: <span className="font-semibold">{current_user.name}</span></p>
                    <p className="text-xs font-medium">{current_user.role}</p>
                </div>

                <div className="flex justify-center items-center mb-12">
                    <h1 className="font-bold text-4xl">Our Team</h1>
                </div>

                <div className="flex justify-center items-center mb-12">
                    <Link
                        href="/demo/partial-reloads?active=true"
                        className="rounded-lg py-3 px-5 bg-gray-200 hover:bg-gray-300 inline-block font-medium"
                        only={['employees']}
                    >
                        Show only active employees
                    </Link>

                    <Link
                        href="/demo/partial-reloads"
                        className="rounded-lg py-3 px-5 ml-2 bg-gray-200 hover:bg-gray-300 inline-block font-medium"
                        only={['employees']}
                        preserveScroll
                    >
                        Show all employees
                    </Link>
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
