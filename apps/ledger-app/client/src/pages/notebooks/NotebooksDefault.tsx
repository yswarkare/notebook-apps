import { Link } from "react-router-dom"
import path from "../../routes/path"

type Props = {}
const NotebooksDefault = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <Link to={path.notebook_pages.create}><button className="btn btn-primary" type="button">Create Notebook</button></Link>
    </div>
  )
}
export default NotebooksDefault