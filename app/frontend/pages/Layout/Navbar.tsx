import { Link } from "@inertiajs/react"

export default function Navbar() {
  return (
    <div className="font-semibold text-lg">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/posts" className="hover:text-blue-600">
            Form Helpers
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/defer" className="hover:text-blue-600">
            Defer
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/load-when-visible" className="hover:text-blue-600">
            Load when visible
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/partial-reloads" className="hover:text-blue-600">
            Partial reloads
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/prefetch" className="hover:text-blue-600">
            Prefetch
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/merging-props" className="hover:text-blue-600">
            Merging props
          </Link>
        </li>
      </ul>
    </div>
  )
}
