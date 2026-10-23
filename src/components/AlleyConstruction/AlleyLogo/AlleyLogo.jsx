import AlleyLogo from "../../../assets/logo_alley-construction.svg?react";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <AlleyLogo width="150" />
    </Link>
  );
}

export default Logo;
