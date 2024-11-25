import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object } from "yup";
import useApiCall from "../../hooks/useApiCall";
import { useNavigate } from "react-router-dom";

const notebookSchema = object({})

type Props = {}
function CreateNotebook({...props}: Props) {
  const { control, handleSubmit, formState: { isValid, errors, touchedFields: touched, }, reset } = useForm({
    resolver: yupResolver(notebookSchema),
  });
  const { error, loading, value, callApi } = useApiCall()
  const navigate = useNavigate()

  return (
    <div>CreateNotebook</div>
  )
}
export default CreateNotebook