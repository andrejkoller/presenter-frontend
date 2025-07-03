import styles from "./Header.module.css";
import { ButtonBase, Menu, MenuItem } from "@mui/material";
import { ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import { Theme } from "../theme/Theme";

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
          <div className={styles["left-section"]}></div>
          <div className={styles["right-section"]}>
            <div className={styles["profile-section"]}>
              <ButtonBase
                className={styles["profile-button"]}
                onClick={handleClick}
              >
                <div className={styles["profile"]}>
                  <h2 className={styles["profile-logo"]}>A</h2>
                </div>
              </ButtonBase>
              <Menu
                sx={{
                  "& .MuiPaper-root": {
                    top: "96px !important",
                    left: "auto !important",
                    right: "0 !important",
                    borderRadius: "8px !important",
                    padding: "4px !important",
                    minWidth: "196px !important",
                    color: "var(--text-default) !important",
                    backgroundColor: "var(--bg-main) !important",
                  },
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px !important",
                    padding: "0 !important",
                  },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem className={styles["menu-item"]}>
                  <span className={styles["menu-text"]}>Profile</span>
                </MenuItem>
                <MenuItem className={styles["menu-item"]}>
                  <span className={styles["menu-text"]}>Support</span>
                  <ExternalLinkIcon className={styles["menu-icon"]} />
                </MenuItem>
                <MenuItem className={styles["menu-item"]}>
                  <Theme />
                </MenuItem>
                <MenuItem className={styles["menu-item"]}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
