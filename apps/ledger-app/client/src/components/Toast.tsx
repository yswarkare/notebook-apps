import { useContextState } from "yw-hooks"

export type ToastMsgType = {
  show: boolean,
  msg: string,
  type?: 'info' | 'success' | 'warning' | 'error',
  x?: 'top' | 'middle' | 'bottom'
  y?: 'start' | 'center' | 'end'
}

const Toast = () => {
  const toast: { [x: string]: ToastMsgType } = useContextState()?.toast

  return Object.values(toast).map(({ msg, type = 'info', x = 'top', y = 'end' }: ToastMsgType) => (
    <div className={`toast toast-${x} toast-${y}`}>
      <div className={`alert alert-${type}`}>
        <span>{msg}</span>
      </div>
    </div>
  ))
}

export default Toast;
