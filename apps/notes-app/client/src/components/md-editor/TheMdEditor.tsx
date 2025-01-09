import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";

type Props = {
  key: string
  disabled?: boolean
  error: boolean
}

export default function TheMdEditor({ key, disabled, error, ...props }: Props) {

  return (
    <div className="container">
      <MDEditor
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        key={key}
        disabled={disabled}
        error={error}
        {...props}
      />
    </div>
  );
}