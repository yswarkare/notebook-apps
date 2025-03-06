import { CloseOutlined } from "@mui/icons-material";
import { Button, Card, IconButton, Paper } from "@mui/material";
import { useState } from "react";

const ShowHide = ({ title = '', children }) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className={'w-full flex flex-col justify-center items-center'}>
      {show ?
        <Paper className="w-full">
          <div className={'w-full flex flex-col justify-center items-center'}>
            <div className={'w-full flex flex-row justify-end items-center'}>
              <IconButton onClick={() => { setShow(false) }}>
                <CloseOutlined />
              </IconButton>
            </div>
            {children && children}
          </div>
        </Paper>
        :
        <div className={'w-full flex flex-col justify-center items-center'}>
          <Button
            variant="contained"
            onClick={() => setShow(true)}
          >
            {title}
          </Button>
        </div>
      }
    </div>
  );
}

export default ShowHide;
