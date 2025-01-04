import { useEffect } from "react"
import useApiCall from "../../hooks/useApiCall";
import ApiError from "../../components/ApiError";
import { BlocksShuffle } from "yw-icons";
import NotebookService from '../../services/notebook.service';
import NotebookList from "../../components/NotebookList/NotebookList";
import { NotebookType } from "../../models/notebook.model";

const ListNotebooks = () => {
  const { error, value, loading, callApi } = useApiCall<null, Array<NotebookType>>()

  useEffect(() => {
    callApi(NotebookService.getNotebookList, null)
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>ListNotebooks</h1>
      {
        value &&
        <NotebookList list={value} />
      }
      {
        loading &&
        <div className="absolute">
          <BlocksShuffle size="3rem" />
        </div>
      }
      {error && <ApiError error={error} />}
    </div>
  )
}
export default ListNotebooks