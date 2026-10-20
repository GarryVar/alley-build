import styles from "./Footer.module.css";
import AlleyLogo from "../AlleyConstruction/AlleyLogo/AlleyLogo";
import AlleyNav from "../AlleyConstruction/AlleyHeader/AlleyNav";

function Footer() {
  return (
    <footer id="about-us" className={`${styles.Footer} py-8`}>
      <div className="container mx-auto px-4">
        <div
          className={`${styles.FooterWrapper} flex justify-between flex-col md:flex-row`}
        >
          <span className="block font-bold text-white mb-2">
            <AlleyLogo fill="white" />
          </span>
          <div className="mt-4 md:mt-0">
            <AlleyNav />
          </div>
          <div className="mt-4 md:mt-0 text-sm">
            <div className="mt-4 md:mt-0 text-sm">
              <p className={styles.FooterCopyrights}>
                297402, Республика Крым, г. о. Евпатория, г. Евпатория, ул.
                Эскадронная, д. 11, офис 3
              </p>
              <p className={styles.FooterCopyrights}>
                &copy; 2026 ООО "АЛЛЕЯ-СТРОЙ"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
