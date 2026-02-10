import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

type Props = {
  selected: string
  label: string
  options: object
  onChange: CallableFunction
}
function StyledSelect<D>({ selected, label, options, onChange }: Props) {
  return (
    <Select
      inputProps={{
        sx: {
          paddingX: '0.5rem',
          paddingY: '0.25rem'
        }
      }}
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {Object.entries(options).map(([key, item]) => (
        <MenuItem value={key}>{item?.[label]}</MenuItem>
      ))}
    </Select>
  )
}

export default StyledSelect