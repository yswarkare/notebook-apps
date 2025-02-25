import { Link } from "react-router-dom";
import { ArticleType } from "../../models/article.model";

type Props = {
  list: Array<ArticleType>
}

const ArticlesList = ({ list }: Props) => {
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center ">
      ArticlesList
      {
        list.length > 0 && list.map(({ name, id }) => (
          <div className="flex flex-row">
            <Link to={`/article/${id}`}>{name}</Link>
          </div>
        ))
      }
    </div>
  );
}

export default ArticlesList;
