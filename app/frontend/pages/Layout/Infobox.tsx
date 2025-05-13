import { ReactNode } from "react"

export default function Infobox({ children }: { children: ReactNode }) {
  return (
    <div className="flex align-top bg-blue-100 text-xl p-6 rounded-lg mb-4 shadow-md" role="alert">
      <div>
        {children}
      </div>
    </div>
  )
}
