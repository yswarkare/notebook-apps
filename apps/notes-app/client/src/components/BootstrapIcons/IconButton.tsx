import { MouseEventHandler } from "react";

type Props = {
  icon: string,
  className?: string,
  tooltip?: string,
  disabled?: boolean,
  tooltipOptions?: {
    color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
    position?: 'top' | 'bottom' | 'left' | 'right',
  },
  onClick?: MouseEventHandler<HTMLElement>
}

const IconButton = ({ icon, className = "text-lg text-primary", onClick = () => { }, tooltip, disabled = false, tooltipOptions }: Props) => {
  return (
    <button className={`${tooltip && 'tooltip'} ${tooltipOptions?.color ? 'tooltip-' + tooltipOptions.color : ''} ${tooltipOptions?.position ? 'tooltip-' + tooltipOptions.position : ''}`}
      data-tip={tooltip ? tooltip : null}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      type="button"
    >
      <i className={`bi bi-${icon} cursor-pointer ${className}`}></i>
    </button>
  );
}

export default IconButton;
