import { useState } from "react"
import IconButton from "../BootstrapIcons/IconButton"
import LoadContent from "./LoadContent"
import { AxiosResponse } from "axios"

type Props = {
  id: string
  name: string
  getApi: (args: string) => Promise<AxiosResponse>
}

function ContentCard<ContentType>({ id, name, getApi }: Props) {
  const [showContent, setShowContent] = useState<boolean>(false);
  return (
    <div id={id} className="w-full flex flex-col justify-start items-start">
      <div className="w-full gap-3 flex flex-row justify-start items-start">
        <h3>{name}</h3>
        {showContent ?
          <IconButton icon="x-circle" onClick={() => setShowContent(false)} />
          :
          <IconButton icon={'filetype-md'} onClick={() => { setShowContent(true) }} />
        }
      </div>
      {showContent &&
        <LoadContent<ContentType> id={id} getApi={getApi} />
      }
    </div>
  );
}

export default ContentCard;
