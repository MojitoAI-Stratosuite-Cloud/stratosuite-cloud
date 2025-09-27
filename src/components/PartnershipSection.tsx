import styles from './PartnershipSection.module.css';

const PartnershipSection = () => {
  return (
    <section className={styles.partnershipSection}>
      <div className={styles.partnershipContent}>
        <div className={styles.partnershipGrid}>
          <div className={styles.partnershipCard}>
            <div className={styles.cardImage}>
              <div className={styles.appExchangeIllustration}>
                <div className={styles.mascot}>🐻</div>
                <div className={styles.appIcons}>
                  <div className={styles.appIcon}>C</div>
                  <div className={styles.appIcon}>📦</div>
                  <div className={styles.appIcon}>D</div>
                  <div className={styles.appIcon}>▶</div>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>AppExchange</span>
              <h3 className={styles.cardTitle}>
                Get the most out of Stratosuite Cloud with partner apps and experts.
              </h3>
              <button className={styles.cardButton}>Explore partners</button>
            </div>
          </div>

          <div className={styles.partnershipCard}>
            <div className={styles.cardImage}>
              <div className={styles.communityIllustration}>
                <div className={styles.communityMembers}>
                  <div className={styles.member}>👩‍💼</div>
                  <div className={styles.member}>👨‍💻</div>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Community</span>
              <h3 className={styles.cardTitle}>
                Connect with our customers, partners, and product experts.
              </h3>
              <button className={styles.cardButton}>Explore Trailblazer Community</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;