import { NavLink } from "react-router-dom";
import styles from "../AlleyHeader/AlleyHeader.module.css";

function AlleyNav() {
    const links = [
        { text: 'Главная', href: '/' },
        { text: 'Солнечная энергия', href: '/inverters' },
        { text: "Наши работы", href: '/portfolio' }
    ];

    return (
        <nav>
            <ul className={styles.Nav}>
                {links.map((i) => (
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.Link} ${styles.linkActive}` : `${styles.Link}`}
                            to={i.href}
                            key={i.href}
                        >{i.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default AlleyNav;