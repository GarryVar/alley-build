import AlleyLogo from "../AlleyLogo/AlleyLogo";
import AlleyNav from "./AlleyNav";
import styles from "./AlleyHeader.module.css";

function AlleyHeader() {
  return (
    // <header className={styles.Header}>
    //   <div className={`${styles.HeaderWrapper} container mx-auto sticky top-0`}>
    //     <AlleyLogo />
    //     <AlleyNav />
    //   </div>
    // </header>

    <header className={styles.Header}>
      <div
        className={`${styles.HeaderWrapper} container mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <AlleyLogo />
        <AlleyNav />
      </div>
    </header>
  );
}

export default AlleyHeader;
