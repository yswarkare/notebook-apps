import MDEditor, { ContextStore } from '@uiw/react-md-editor';
import { ChangeEvent } from 'react';
import rehypeSanitize from "rehype-sanitize";

type Props = {
  key: string
  value: string
  disabled: boolean
  error: boolean
  onChange: ((value?: string, event?: ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void) | undefined
}

export default function MdEditorForUpdate({ key, value, onChange }: Props) {

  return (
    <div className="container">
      <MDEditor
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        key={key}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}