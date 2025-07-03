"use client";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <nav className={styles["nav-section"]}></nav>
        </div>
      </div>
    </div>
  );
};
