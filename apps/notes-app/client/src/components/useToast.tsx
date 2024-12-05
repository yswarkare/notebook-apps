import { useEffect, useRef, useState } from "react";
import { useContextState, useUpdateContextState } from "yw-hooks";
import { ToastMsgType } from './Toast';

const useToast = (delay: number = 5000) => {
  const state.toast = useContextState()
  const [toastMsg, setToast] = useState<ToastMsgType>()
  const [display, setDisplay] = useState<boolean>();
  const timerRef = useRef<Timer>()
  const updateContext = useUpdateContextState()

  useEffect(() => {
    if (display) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setDisplay(false)
        if (state.toast?.[timerRef.current?.ref?.toString()]) {
          const newToast = { ...state.toast }
          delete newToast[timerRef.current?.ref?.toString()]
          updateContext('toast', newToast)
        }
      }, delay)
      const newToast = { ...state.toast, [timerRef.current?.ref?.toString()]: toastMsg }
      updateContext('toast', newToast)
    } else {
      if (state.toast?.[timerRef.current?.ref?.toString()]) {
        const newToast = { ...state.toast }
        delete newToast[timerRef.current?.ref?.toString()]
        updateContext('toast', newToast)
      }
      clearTimeout(timerRef.current);
      setDisplay(false)
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [display, delay]);

  return {display, setDisplay, setToast}
}


export default useToast;