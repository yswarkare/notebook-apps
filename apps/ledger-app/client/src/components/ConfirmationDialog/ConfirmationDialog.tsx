import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

interface ConfirmationDialogProps {
  id: string;
  open: boolean;
  content: string
  handleNo: MouseEventHandler<HTMLButtonElement> | undefined
  handleYes: MouseEventHandler<HTMLButtonElement> | undefined
}

export default function ConfirmationDialog({
  id,
  content,
  open,
  handleNo,
  handleYes,
  ...props
}: ConfirmationDialogProps) {

  return (
    <Dialog
      id={id}
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...props}
    >
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent dividers>
        {content}
      </DialogContent>
      <DialogActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button variant='contained' color="primary" onClick={handleYes}>Yes</Button>
        <Button variant='contained' color="primary" autoFocus onClick={handleNo}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}