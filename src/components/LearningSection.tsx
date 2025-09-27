import styles from './LearningSection.module.css';

const LearningSection = () => {
  return (
    <section className={styles.learningSection}>
      <div className={styles.learningContent}>
        <h2 className={styles.sectionTitle}>Learn as you grow.</h2>
        <p className={styles.sectionDescription}>
          When you're ready to get up and running on Stratosuite Cloud, we have all sorts of people and 
          free resources to help your teams quickly get up to speed. And we're always here for 
          you with more learning and support as you continue to grow with Stratosuite Cloud.
        </p>

        <div className={styles.learningGrid}>
          <div className={styles.learningCard}>
            <div className={styles.cardImage}>
              <div className={styles.trailheadIllustration}>
                <div className={styles.mascot}>🐻</div>
                <div className={styles.badges}>
                  <div className={styles.badge}>📝</div>
                  <div className={styles.badge}>🏆</div>
                  <div className={styles.badge}>📊</div>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>SkillPath</span>
              <h3 className={styles.cardTitle}>
                Help every employee get the Stratosuite Cloud skills they need.
              </h3>
              <button className={styles.cardButton}>Learn for free</button>
            </div>
          </div>

          <div className={styles.learningCard}>
            <div className={styles.cardImage}>
              <div className={styles.eventsIllustration}>
                <div className={styles.eventScreens}>
                  <div className={styles.eventScreen}>📺</div>
                  <div className={styles.eventScreen}>🎯</div>
                </div>
              </div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Stratosuite+</span>
              <h3 className={styles.cardTitle}>
                Learn more about products at live and on-demand events.
              </h3>
              <button className={styles.cardButton}>Explore events</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;