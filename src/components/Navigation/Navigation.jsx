import styles from "./Navigation.module.css";
import { FcMenu } from "react-icons/fc";
import React from "react";

const Navigation = () => {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerMobile}>
        <div className={styles.containerMobileLeft}>
          <img
            className={styles.containerMobileLeftLogo}
            src="/images/logo.svg"
            alt="logo"
          />
        </div>
        <div className={styles.containerMobileRight}>
          <FcMenu className={styles.containerMobileRightIcon} onClick={handleToggle} />
        </div>
      </div>
      <div className={styles.containerDesktop}>
        <div className={styles.containerDesktopLeft}>
          <img
            className={styles.containerDesktopLeftLogo}
            src="/images/logo.svg"
            alt="logo"
          />
          <ul className={styles.containerDesktopLeftList}>
            <li className={styles.containerDesktopLeftListItem}>Features</li>
            <li className={styles.containerDesktopLeftListItem}>Pricing</li>
            <li className={styles.containerDesktopLeftListItem}>Resources</li>
          </ul>
        </div>
        <div className={styles.containerDesktopRight}>
          <h3 className={styles.containerDesktopRightItem}>Login</h3>
          <button className={styles.containerDesktopRightButton}>
            Sign Up
          </button>
        </div>
      </div>
      <div
        className={
          toggled ? `${styles['mobileMenu']} ${styles['active']}` : `${styles['mobileMenu']}`
        }
      >
        <ul className={styles.mobileMenuList}>
          <li className={styles.mobileMenuListItem}>Features</li>
          <li className={styles.mobileMenuListItem}>Pricing</li>
          <li className={styles.mobileMenuListItem}>Resources</li>
        </ul>
        <hr className={styles.mobileMenuLine}></hr>
        <h3 className={styles.mobileMenuLogin}>Login</h3>
        <button className={styles.mobileMenuButton}>Sign Up</button>
      </div>
    </div>
  );
};
export default Navigation;
