"use client";
import styles from "./Header.module.css";
import { ButtonBase, Divider, Menu, MenuItem } from "@mui/material";
import { InfoIcon, LanguagesIcon, SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Theme } from "@/components/theme/Theme";
import Link from "next/link";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <ButtonBase
                className={styles["profile-button"]}
                onClick={handleClick}
              >
                <div className={styles["profile"]}>
                  <h2 className={styles["profile-logo"]}>AK</h2>
                </div>
              </ButtonBase>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    top: "64px !important",
                    borderRadius: "10px !important",
                    padding: "8px !important",
                    width: "260px !important",
                    color: "var(--text-default) !important",
                    backgroundColor: "var(--bg-menu) !important",
                  },
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px !important",
                    padding: "0 !important",
                  },
                }}
                className={styles["profile-menu"]}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <div className={styles["profile-menu-header"]}>
                  <div className={styles["profile-menu-avatar"]}>
                    <h2 className={styles["profile-menu-logo"]}>AK</h2>
                  </div>
                  <span className={styles["profile-menu-name"]}>
                    Andrej Koller
                  </span>
                </div>
                <Divider className={styles["profile-menu-divider"]} />
                <MenuItem className={styles["profile-menu-item"]}>
                  <SettingsIcon className={styles["profile-menu-icon"]} />
                  <span className={styles["profile-menu-text"]}>
                    Account Settings
                  </span>
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <LanguagesIcon className={styles["profile-menu-icon"]} />
                  <span className={styles["profile-menu-text"]}>Language</span>
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <Theme />
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <InfoIcon className={styles["profile-menu-icon"]} />
                  <span className={styles["profile-menu-text"]}>About</span>
                </MenuItem>
                <MenuItem className={styles["profile-menu-item"]}>
                  <span className={styles["profile-menu-text"]}>Logout</span>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
