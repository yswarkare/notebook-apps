import { TagType } from "../../models/tags.model";
import IconButton from "../BootstrapIcons/IconButton";
import { LabelOutlined } from "../Icons/Label";

type Props = {
  tags: Array<TagType>
}

const TagsList = ({ tags }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full gap-3 flex flex-row justify-center items-center">
      <IconButton icon="tags" />
        {
          tags.map(({ id, name }) => (
            <button className="badge badge-accent badge-outline badge-lg" type="button">
              <div key={id} className="flex gap-1 flex-row justify-center items-center">
                <LabelOutlined />
                {name}
              </div>
            </button>

          ))
        }
      </div>
    </div>
  );
}

export default TagsList;
