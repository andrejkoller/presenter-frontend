"use client";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import styles from "./page.module.css";
import { Header } from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { usePathname } from "next/navigation";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <ThemeProvider>
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.layoutContent}>
          {pathname !== "/" && <Sidebar />}
          <main className="mainContent">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
