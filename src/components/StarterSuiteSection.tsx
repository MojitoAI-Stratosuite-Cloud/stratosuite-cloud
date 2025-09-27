import styles from './StarterSuiteSection.module.css';

const StarterSuiteSection = () => {
  return (
    <section className={styles.starterSection}>
      <div className={styles.starterContent}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Start simply. Scale endlessly.</h2>
        </div>

        <div className={styles.starterGrid}>
          <div className={styles.starterLeft}>
            <div className={styles.salesTag}>Sales</div>
            <div className={styles.mockupContainer}>
              <div className={styles.mockupScreen}>
                <div className={styles.playButton}>▶</div>
              </div>
            </div>
          </div>

          <div className={styles.starterRight}>
            <h3 className={styles.starterTitle}>
              See results on day one with Starter Suite.
            </h3>
            <p className={styles.starterDescription}>
              Our all-in-one small business solution,{' '}
              <a href="#" className={styles.pricingLink}>Starter Suite</a>, brings 
              sales, service, marketing, and Slack together on a single, 
              easy-to-use app. Set up in a matter of minutes with built-in 
              guidance and easy-to-follow onboarding.
            </p>
            <p className={styles.pricingInfo}>
              <span className={styles.pricingAmount}>$25 USD/user/month</span>{' '}
              <a href="#" className={styles.pricingLink}>See full pricing</a>
            </p>
            <button className={styles.tryButton}>Try for free</button>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>Lead, Contact, and Opportunity Management</h4>
                <p className={styles.featureDescription}>
                  Capture and track customer data from any source. Keep your 
                  team on track with built-in deal stages. Get recommended next 
                  steps to move deals along the pipeline.
                </p>
              </div>

              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>Email Marketing</h4>
              </div>

              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>Service Case Management</h4>
              </div>

              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>Reporting and Analytics</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterSuiteSection;