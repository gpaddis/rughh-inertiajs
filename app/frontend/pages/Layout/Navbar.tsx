import { Link } from "@inertiajs/react"

export default function Navbar() {
  return (
    <div className="font-semibold text-lg">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/demo/defer">
            Defer
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/load-when-visible">
            Load when visible
          </Link>
        </li>
      </ul>
    </div>
  )
}
