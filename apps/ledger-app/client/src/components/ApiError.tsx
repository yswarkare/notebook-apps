import { AxiosError } from 'axios';

type Props = {
  error: AxiosError
}

export default function ApiError({ error }: Props) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <p>{error.status}</p>
      <p>{error.response?.data?.message && error.response.data.message}</p>
    </div>
  )
}