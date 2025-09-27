import styles from './CaseStudySection.module.css';
import landscapeImage from '@/assets/landscape-decoration.png';

const CaseStudySection = () => {
  return (
    <>
      <section className={styles.caseStudySection}>
        <div className={styles.caseStudyContent}>
          <div className={styles.caseStudyLeft}>
            <div className={styles.videoContainer}>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>196,000</span>
                  <span className={styles.statLabel}>Articles</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>2M+</span>
                  <span className={styles.statLabel}>Support Cases</span>
                </div>
              </div>
              
              <div className={styles.playButtonLarge}>▶</div>
            </div>
            
            <div className={styles.aiMascot}>🤖</div>
          </div>

          <div className={styles.caseStudyRight}>
            <h2 className={styles.caseStudyTitle}>
              With 2M+ cases closed, Stratosuite Cloud is an Agentic Enterprise.
            </h2>
            <p className={styles.caseStudyDescription}>
              CloudBot helps us deliver real results, like 85% 
              autonomous case resolution, 15% more marketing pipeline, 
              and 1.8x higher lead conversion. See how we did it – and 
              how you can, too.
            </p>
            <div className={styles.caseStudyActions}>
              <button className={styles.storiesButton}>See our stories</button>
              <button className={styles.helpButton}>Experience Stratosuite Help</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <div 
          className={styles.landscapeBottom}
          style={{ backgroundImage: `url(${landscapeImage})` }}
        />
        <h2 className={styles.closingTitle}>Let's make this easy.</h2>
      </section>
    </>
  );
};

export default CaseStudySection;