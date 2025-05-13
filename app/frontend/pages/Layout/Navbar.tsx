import { Link } from "@inertiajs/react"

export default function Navbar() {
  return (
    <div className="font-semibold text-lg">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/posts">
            Form Helpers
          </Link>
        </li>
        <li>&middot;</li>
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
        <li>&middot;</li>
        <li>
          <Link href="/demo/partial-reloads">
            Partial reloads
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link href="/demo/prefetch">
            Prefetch
          </Link>
        </li>
      </ul>
    </div>
  )
}
