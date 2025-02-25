import IconButton from "../BootstrapIcons/IconButton";
import { LabelOutlined } from "../Icons/Label";
import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { AxiosResponse } from "axios";
import LoadingAndError from "../LoadingAndError";
import { TagsAndRefs } from "../../models/tags.model";

type Props = {
  parentId: string
  getApi: (args: string) => Promise<AxiosResponse<string, TagsAndRefs>>
}


function TagsAndRefsUrls({ parentId, getApi }: Props) {
  const { value, loading, error, callApi } = useApiCall<string, TagsAndRefs>()

  useEffect(() => {
    callApi(getApi, parentId)
    console.log({ value })
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full gap-3 flex flex-row justify-center items-center">
        {value && value.tags?.length > 0 &&
          <>
            <IconButton icon="tags" />
            {
              value.tags.map(({ id, name }) => (
                <button className="badge badge-accent badge-outline badge-lg" type="button">
                  <div key={id} className="flex gap-1 flex-row justify-center items-center">
                    <LabelOutlined />
                    {name}
                  </div>
                </button>

              ))
            }
          </>
        }
      </div>
      <LoadingAndError loading={loading} error={error} />
    </div>
  )
}

export default TagsAndRefsUrls;
