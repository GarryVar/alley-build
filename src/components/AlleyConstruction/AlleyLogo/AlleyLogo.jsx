import AlleyLogo from "../../../assets/logo_alley-construction.svg?react";
import { Link } from "react-router-dom";
function Logo() {
    return (
        <Link to="/">
            <AlleyLogo width="300" fill="var(--primary-brand)" />
        </Link>
    )
};

export default Logo;