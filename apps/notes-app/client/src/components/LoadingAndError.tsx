import { AxiosError } from "axios";
import { BlocksShuffle } from "yw-icons";
import ApiError from "./ApiError";

type Props = {
  loading?: boolean
  error?: AxiosError
}

const LoadingAndError = ({ loading, error }: Props) => {
  return (
    <div className="relative">
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

export default LoadingAndError;
