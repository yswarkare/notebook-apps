import { Link, Outlet, useMatches } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react"
import { PageLoader } from "yw-icons"
import path from "../routes/path";

const AuthRouter = lazy(async () => await import('../components/AuthRouter'));

const notebookPages = [
  { label: "Create Notebook", path: path.notebook_pages.create },
  { label: "Notebook List", path: path.notebook_pages.list },
  { label: "Notebook Home", path: path.notebook_pages.default },
]

function NotebooksPage() {
  const [selected, setSelected] = useState<string>();
  const matches = useMatches()

  useEffect(() => {
    console.log({ matches })
    if (matches?.[2]?.pathname) {
      setSelected(matches[2].pathname)
    }
  }, [matches]);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h1>List of Notebooks</h1>
      <div className="w-full flex flex-row justify-around items-center">
        <div role="tablist" className="py-4 tabs tabs-bordered">
          {notebookPages.map(({ label, path }) => (
            <div role="tab" className={`tab ${selected === path && 'tab-active'}`}>
              <Link to={path} key={path} >{label}</Link>
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={<PageLoader />}>
        <AuthRouter>
          <Outlet />
        </AuthRouter>
      </Suspense>
    </div>
  )
}
export default NotebooksPage