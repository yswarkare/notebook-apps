import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function useApiCall<T, D>() {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<AxiosError>();
  const [value, setValue] = useState<D>();

  async function callApi(func: (arg0: T) => Promise<AxiosResponse>, body: T) {
    try {
      setLoading(true);
      setError(undefined);
      setValue(undefined);
      const res: AxiosResponse = await func(body);
      console.log({ res })
      const data = await res.data?.data;
      setValue(data);
    } catch (err) {
      if (err instanceof AxiosError) setError(err);
      throw err;
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, value, callApi }
}

export default useApiCall;