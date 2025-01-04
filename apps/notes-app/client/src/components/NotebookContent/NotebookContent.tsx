import { NotebookType } from "../../models/notebook.model";
import NotebookArticles from "./NotebookArticles";
import NotebookTags from "./NotebookTags";

type Props = {
  notebook: NotebookType
}

const NotebookContent = ({ notebook }: Props) => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {notebook.name}
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        <NotebookTags notebookId={notebook.id} />
      </div>
      <NotebookArticles notebookId={notebook.id} />
    </div>
  );
}

export default NotebookContent;
