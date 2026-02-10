import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { useNavigate, useParams } from "react-router-dom"
import { OptType } from "./matches"

type Props = {
  selected: string
  options: OptType
  onChange: CallableFunction
}

function StyledSelect({ selected, options, onChange }: Props) {
  const navigate = useNavigate()
  const params = useParams()

  const changeHandler = (value: string) => {
    onChange(value);
    if (typeof options?.[value].pathname === 'string') {
      navigate(options?.[value].pathname)
    } else {
      navigate(options?.[value].pathname(params.productName))
    }
  }
  return (
    <Select
      inputProps={{
        sx: {
          paddingX: '0.5rem',
          paddingY: '0.25rem'
        }
      }}
      value={selected}
      onChange={(e) => changeHandler(e.target.value)}
    >
      {Object.entries(options).map(([key, item]) => (
        <MenuItem value={key}>{item.label}</MenuItem>
      ))}
    </Select>
  )
}

export default StyledSelect