import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { PageLoader } from "yw-icons"

type Props = {}
function NotebooksPage({ ...props }: Props) {
  return (
    <div className="flex flex-col justify-start items-center">
      <h1>List of Notebooks</h1>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default NotebooksPage