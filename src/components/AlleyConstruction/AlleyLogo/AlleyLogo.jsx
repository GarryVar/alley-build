import AlleyLogo from "../../../assets/logo_alley-construction.svg?react";
import { Link } from "react-router-dom";
function Logo({ width }) {
  return (
    <Link to="/">
      <AlleyLogo width={width} />
    </Link>
  );
}

export default Logo;
