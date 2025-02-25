type Props = {
  icon: string,
  className?: string,
}

const BootstrapIcon = ({ icon, className = "text-lg text-primary" }: Props) => {
  return (
    <i className={`bi bi-${icon} cursor-pointer ${className}`}></i>
  );
}

export default BootstrapIcon;
