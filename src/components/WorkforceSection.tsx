import styles from './WorkforceSection.module.css';

const WorkforceSection = () => {
  return (
    <section className={styles.workforceSection}>
      <div className={styles.workforceContent}>
        <h2 className={styles.workforceTitle}>
          Create a limitless workforce.<br />
          With CloudBot.
        </h2>
        
        <p className={styles.workforceDescription}>
          Create a digital labor force that works alongside your human workforce.{' '}
          <a href="#" className={styles.workforceLink}>AI agents</a> work 
          24/7, taking action and providing support to employees and customers. Free your 
          people to be more productive, so they can focus on more important stuff.
        </p>

        <div className={styles.workforceActions}>
          <button className={styles.exploreButton}>Explore CloudBot</button>
          <button className={styles.calculateButton}>Calculate your ROI</button>
        </div>

        <div className={styles.trustedBy}>
          <h3 className={styles.trustedTitle}>CloudBot is trusted by:</h3>
          <div className={styles.logoGrid}>
            <div className={styles.companyLogo}>GLOBO</div>
            <div className={styles.companyLogo}>indeed</div>
            <div className={styles.companyLogo}>LENNAR</div>
            <div className={styles.companyLogo}>VF GOLF</div>
            <div className={styles.companyLogo}>OpenTable</div>
            <div className={styles.companyLogo}>PEPSICO</div>
            <div className={styles.companyLogo}>CHICAGO Medicine</div>
            <div className={styles.companyLogo}>WILLIAMS-SONOMA</div>
            <div className={styles.companyLogo}>1-800 ACCOUNTANT</div>
            <div className={styles.companyLogo}>Big Brothers Big Sisters</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkforceSection;