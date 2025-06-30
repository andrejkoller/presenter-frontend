"use client";
import { MenuIcon } from "lucide-react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
//import { usePathname } from "next/navigation";
import { ButtonBase } from "@mui/material";

type SidebarProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

export const Sidebar = ({
  isOpen: sidebarOpen = true,
  onToggle: toggleSidebar,
}: SidebarProps) => {
  /*const pathname = usePathname();

  const getActiveStyle = (path: string) =>
    pathname === path
      ? {
          color: "var(--text-default)",
          backgroundColor: "var(--link-hover-bg)",
        }
      : {};*/

  return (
    <div
      className={styles["sidebar"]}
      style={{
        width: sidebarOpen ? "280px" : "0px",
        minWidth: sidebarOpen ? "280px" : "0px",
        overflow: sidebarOpen ? "visible" : "hidden",
        transition: "width 0.2s ease, min-width 0.2s ease, overflow 0.2s ease",
        padding: sidebarOpen ? "0 12px" : "0px",
      }}
    >
      <div className={styles["sidebar-container"]}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["logo-section"]}>
            <div className={styles["logo"]}>
              <Link href={"/"} className={styles["logo-link"]}>
                <h1>Presenter</h1>
              </Link>
            </div>
            <div className={styles["menu-toggle"]}>
              <ButtonBase
                className={styles["menu-button"]}
                onClick={toggleSidebar}
              >
                <MenuIcon className={styles["menu-icon"]} />
              </ButtonBase>
            </div>
          </div>
          <nav className={styles["nav-section"]}></nav>
        </div>
      </div>
    </div>
  );
};
