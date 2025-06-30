"use client";
import { ThemeProvider } from "@/theme/ThemeProvider";
import styles from "./page.module.css";
import { useState } from "react";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className={styles["layout"]}>
        <div className={styles["layout-container"]}>
          <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
          <div className={styles["layout-content"]}>
            <Header isOpen={sidebarOpen} onToggle={toggleSidebar} />
            <main className={styles["main-content"]}>{children}</main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
