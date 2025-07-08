import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.songsSection}>
      <div className={styles.songsContainer}>
        <div className={styles.songsContent}></div>
      </div>
    </section>
  );
}
