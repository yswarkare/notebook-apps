import ThemeSelector from "../components/ThemeSelector/ThemeSelector";
import { customThemes } from "../utils/themes";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-end">
        <ThemeSelector themes={Object.keys(customThemes)} />
      </div>
    </div>
  );
}

export default Footer;
