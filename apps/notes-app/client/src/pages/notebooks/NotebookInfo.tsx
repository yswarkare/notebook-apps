import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useApiCall from "../../hooks/useApiCall"
import NotebookService from "../../services/notebook.service"
import { BlocksShuffle } from "yw-icons"
import ApiError from "../../components/ApiError"
import NotebookContent from "../../components/NotebookContent/NotebookContent"
import { NotebookType } from "../../models/notebook.model"

function NotebookInfo() {
  const { value, error, loading, callApi } = useApiCall<string, NotebookType>()
  const params = useParams()

  const getNotebook = async () => {
    try {
      if (params?.notebookId) {
        await callApi(NotebookService.getNotebook, params?.notebookId)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNotebook()
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {
        value &&
        <NotebookContent notebook={value} />
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

export default NotebookInfo