import { AxiosResponse } from "axios";
import ContentCard from "./ContentCard";

type Props<ContentType> = {
  list?: Array<ContentType>
  getApi: (args: string) => Promise<AxiosResponse>
}

function ContentList<ContentType>({ list, getApi }: Props<ContentType>) {

  return (
    <div className="w-full flex flex-col justify-start items-start">
      {
        list && list?.length > 0 && list.map(({ id, name }) => (
          <ContentCard<ContentType> id={id} name={name} getApi={getApi} />
        ))
      }
    </div>
  );
}

export default ContentList;
