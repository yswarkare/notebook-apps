import { NotebookType } from "../../models/notebook.model";
import NotebookService from "../../services/notebook.service";
import Tags from "../tags/Tags";
import NotebookArticles from "./NotebookArticles";

type Props = {
  notebook: NotebookType
}

const NotebookContent = ({ notebook }: Props) => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {notebook.name}
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        <Tags notebookId={notebook.id} getApi={NotebookService.getNotebookTags} createApi={NotebookService.createNotebookTags} />
      </div>
      <NotebookArticles notebookId={notebook.id} />
    </div>
  );
}

export default NotebookContent;
