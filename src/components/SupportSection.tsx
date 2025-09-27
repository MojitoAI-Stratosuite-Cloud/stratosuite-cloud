import styles from './SupportSection.module.css';

const SupportSection = () => {
  return (
    <section className={styles.supportSection}>
      <div className={styles.landscapeLeft} />
      <div className={styles.mascotDecor}>🐻</div>
      
      <div className={styles.supportContent}>
        <h2 className={styles.sectionTitle}>Solve problems quickly.</h2>
        
        <p className={styles.sectionDescription}>
          Your success is our top priority. Whatever solution you choose, it comes with free one-
          day ticketing and Stratosuite Cloud alert monitoring, right out of the box. Need more support? 
          We have a variety of{' '}
          <a href="#" className={styles.supportLink}>Success Plans</a> and{' '}
          <a href="#" className={styles.supportLink}>Professional Services</a> offering resources, expert 
          guidance, and the tech support you need to get the most value from Stratosuite Cloud.
        </p>

        <p className={styles.includedText}>Included with all product licenses:</p>

        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <h3 className={styles.cardTitle}>
              24-hour turnaround for technical support tickets
            </h3>
          </div>

          <div className={styles.supportCard}>
            <h3 className={styles.cardTitle}>
              On-demand articles and documentation
            </h3>
          </div>

          <div className={styles.supportCard}>
            <h3 className={styles.cardTitle}>
              Guided online learning to upskill teams
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;