import React from "react";
import Icon from "../Icon";
import styles from "../../assets/css/settings.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebarWrapper}>
      <div>
        <button className={styles.activeSidebarMenu}>
          <Icon icon="settings" /> Settings Profile
        </button>
      </div>

      <div>
        <button className={styles.sidebarMenu}>
          <Icon icon="verification" /> Identification
        </button>
      </div>

      <div>
        <button className={styles.sidebarMenu}>
          <Icon icon="settings" /> Preference
        </button>
      </div>

      <div>
        <button className={styles.sidebarMenu}>
          <Icon icon="payment" /> Payment
        </button>
      </div>

      <div>
        <button className={styles.sidebarMenu}>
          <Icon icon="settings" /> Security
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
