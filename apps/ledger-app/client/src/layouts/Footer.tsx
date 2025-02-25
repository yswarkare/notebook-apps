import ThemeSelector from "../components/ThemeSelector/ThemeSelector";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-end">
        <ThemeSelector />
      </div>  
    </div>
  );
}

export default Footer;
