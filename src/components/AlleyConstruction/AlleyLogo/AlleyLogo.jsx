import AlleyLogo from "../../../assets/logo_alley-construction.svg?react";
import { Link } from "react-router-dom";
function Logo({ width }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link to="/" onClick={handleScrollTop}>
      <AlleyLogo width={width} />
    </Link>
  );
}

export default Logo;
