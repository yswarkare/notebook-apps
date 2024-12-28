import { useEffect } from 'react';
import { Link, useNavigate, useMatches, useLocation } from 'react-router-dom';

type Props = {
  status?: number,
  redirectTo?: string,
  errors: Array<string>,
}

const ErrorPage = ({ status, errors, redirectTo }: Props) => {
  const navigate = useNavigate()

  const goBack = () => {
    if (redirectTo) {
      navigate(redirectTo)
    } else {
      navigate(-1)
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className={'text-error text-2xl font-semibold'}>{status || ""} Error</p>
      <ul className="w-full text-error flex flex-col justify-center items-center">
        {
          errors.map((err) => (
            <li>{err}</li>
          ))
        }
      </ul>
      <div className="w-full flex flex-col">
        <button type='button' onClick={() => goBack()}>go to previous page</button>
      </div>
    </div>
  );
}

export default ErrorPage;
