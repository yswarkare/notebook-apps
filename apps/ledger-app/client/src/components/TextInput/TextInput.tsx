import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, Email, Key } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

type Props = {
  type: string;
  label: string;
  error: boolean
  disabled: boolean | undefined
  helperText: string
}

export default function TextInput({ type, label, error, disabled, helperText, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl variant="outlined" fullWidth>
      {
        type === 'password' || type === 'confirmPassword' ? (
          <TextField
            id="outlined-error-helper-text"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end" >
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <Key />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            label={label}
            error={error}
            disabled={disabled}
            helperText={helperText}
            {...props}
          />
        ) : type === 'username' || type === 'email' ? (
          <TextField
            id="outlined-error-helper-text"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {type === 'username' && <AccountCircle />}
                    {type === 'email' && <Email />}
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            type={type}
            label={label}
            error={error}
            disabled={disabled}
            helperText={helperText}
            {...props}
          />
        ) : (
          <TextField
            id="outlined-error-helper-text"
            type={type}
            label={label}
            error={error}
            disabled={disabled}
            helperText={helperText}
            fullWidth
            {...props}
          />
        )
      }
    </FormControl >
  )
}