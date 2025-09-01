import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <div className={styles.homeHeader}></div>
          <div className={styles.homeBody}>
            <div className={styles.homeFeatures}>
              {/* Placeholder for features or quick links */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
