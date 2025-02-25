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
  const [edit, setEdit] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>('')
  const [showContent, setShowContent] = useState<boolean>(false);

  const setTheEdit = (edt: boolean) => {
    if (edt) setNewName(name);
    else setNewName('')
    setEdit(edt)
  }
  return (
    <div id={id.slice(10)} className="w-full flex flex-col justify-start items-start">
      <div className="w-full gap-3 flex flex-row justify-start items-center">
        <div className="w-full gap-2 flex flex-row flex-grow">
          {
            edit ?
              <label htmlFor="name" className="w-full flex flex-col justify-start text-left">
                <span>name</span>
                <input className='w-full input' type="text" title="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
              </label>
              :
              <>
                <div className="w-full flex flex-row">
                  <h3>{name}</h3>
                </div>
              </>
          }
          <div className="gap-2 flex flex-col justify-center">
            {
              edit ?
                <>
                  <IconButton icon={"x-circle"} onClick={() => { setTheEdit(!edit) }} />
                  <IconButton icon={'check-circle'} onClick={() => { setTheEdit(!edit) }} />
                </>
                :
                <>
                  <IconButton icon={'pen'} onClick={() => { setTheEdit(!edit) }} />
                  <IconButton icon={showContent ? "x-circle" : 'filetype-md'} onClick={() => { setShowContent(!showContent) }} />
                </>
            }
          </div>
        </div>
      </div>
      {showContent &&
        <LoadContent<ContentType> id={id} getApi={getApi} />
      }
    </div>
  );
}

export default ContentCard;
