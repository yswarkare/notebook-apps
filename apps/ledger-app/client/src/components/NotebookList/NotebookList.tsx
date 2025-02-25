import { NotebookType } from "../../models/notebook.model";
import NotebookRow from "./NotebookRow";

type Props = {
  list: Array<NotebookType>
}

const NotebookList = ({ list }: Props) => {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table">
        {/* head */}
        <thead>
          <tr>
            <th>sr. no.</th>
            <th>Title</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((notebook, index) => (
              <NotebookRow key={notebook.id} notebook={notebook} index={index} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default NotebookList;
