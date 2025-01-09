import { useEffect } from "react";
import { AnyObject, ObjectSchema } from "yup";
import { FieldValues } from "react-hook-form";
import { AxiosResponse } from "axios";
import { BlocksShuffle } from "yw-icons";
import useApiCall from "../../hooks/useApiCall";
import ApiError from "../ApiError";
import ContentList from "./ContentList";
import CreateContent from "./CreateContent";

type PropType<CreateContentType> = {
  contentName: string
  contentProps: object
  parentId: string
  parentIdName: string
  contentSchema: ObjectSchema<FieldValues, AnyObject, any, "">
  createApi: (args: CreateContentType) => Promise<AxiosResponse>
  getApi: (args: string) => Promise<AxiosResponse>
  getContentApi: (args: string) => Promise<AxiosResponse>
}

function Content<CreateContentType, ContentType>({
  contentName, contentProps, parentId, parentIdName, contentSchema, createApi, getApi, getContentApi
}: PropType<CreateContentType>) {

  const { value, loading, error, callApi } = useApiCall<string, Array<ContentType>>()

  useEffect(() => {
    callApi(getApi, parentId)
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full gap-8 flex flex-col justify-center items-center">
        <ContentList<ContentType> list={value} getApi={getContentApi} />
        <CreateContent<CreateContentType, ContentType>
          contentName={contentName}
          contentProps={contentProps}
          parentId={parentId}
          parentIdName={parentIdName}
          contentSchema={contentSchema}
          createApi={createApi}
        />
      </div>
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
    </div>
  );
}

export default Content;