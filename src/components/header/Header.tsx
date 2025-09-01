"use client";
import styles from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <div className={styles["left-section"]}>
            <div className={styles["nav-section"]}>
              <ul className={styles["nav-list"]}>
                <li className={styles["nav-item"]}>
                  <Link href="/" className={styles["nav-link"]}>
                    <span className={styles["nav-text"]}>Dashboard</span>
                  </Link>
                </li>
                <li className={styles["nav-item"]}>
                  <Link href="/new" className={styles["nav-link"]}>
                    <span className={styles["nav-text"]}>New Presentation</span>
                  </Link>
                </li>
                <li className={styles["nav-item"]}>
                  <Link href="/media" className={styles["nav-link"]}>
                    <span className={styles["nav-text"]}>Media Library</span>
                  </Link>
                </li>
                <li className={styles["nav-item"]}>
                  <Link href="/songs" className={styles["nav-link"]}>
                    <span className={styles["nav-text"]}>Songs</span>
                  </Link>
                </li>
                <li className={styles["nav-item"]}>
                  <Link href="/settings" className={styles["nav-link"]}>
                    <span className={styles["nav-text"]}>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["right-section"]}>
            <div className={styles["profile-section"]}>
              <Link
                href={
                  process.env.NEXT_PUBLIC_PROFILE_URL ||
                  "http://localhost:3000/account/profile"
                }
                target="_blank"
              >
                <div className={styles["profile"]}>
                  <span className={styles["profile-initials"]}>A</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
