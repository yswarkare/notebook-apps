import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../../services/article.service";
import { BlocksShuffle } from "yw-icons";
import ApiError from "../../components/ApiError";
import useApiCall from "../../hooks/useApiCall";
import { ArticleType } from "../../models/article.model";
import ArticleContent from "../../components/Articles/ArticleContent";

const ArticlePage = () => {
  const params = useParams()
  const { value, error, loading, callApi } = useApiCall<string, ArticleType>()
  useEffect(() => {
    if (params?.articleId) {
      callApi(ArticleService.getArticle, params?.articleId)
    }
  }, [])

  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center">
      ArticlePage
      {value && <ArticleContent article={value} />}
      {
        loading &&
        <div className="absolute">
          <BlocksShuffle size="3rem" />
        </div>
      }
      {
        error! &&
        <ApiError error={error} />
      }
    </div>
  );
}

export default ArticlePage;
