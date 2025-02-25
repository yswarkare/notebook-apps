import { ArticleType } from "../../models/article.model";
import ArticleService from "../../services/article.service";
import Tags from "../tags/Tags";

type Props = {
  article: ArticleType
}

const ArticleContent = ({ article }: Props) => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {article.name}
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        <Tags notebookId={article.id} getApi={ArticleService.getArticleTags} createApi={ArticleService.createArticleTags} />
      </div>
    </div>
  );
}

export default ArticleContent;
