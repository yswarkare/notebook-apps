import { useState } from 'react';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function useApiCall() {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState();
  const [value, setValue] = useState();

  async function callApi(func: (arg0: object) => Response | PromiseLike<Response>, body: object) {
    try {
      setLoading(true);
      setError(undefined);
      setValue(undefined);
      const res: Response = await func(body);
      console.log({ res })
      const cookies = res.headers.getSetCookie()
      console.log({ cookies })
      const data = await res.data;
      console.log({ data })
      setValue(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, value, callApi }
}

export default useApiCall;