import styles from './GetStartedSection.module.css';
import landscapeImage from '@/assets/landscape-decoration.png';

const GetStartedSection = () => {
  return (
    <section className={styles.getStartedSection}>
      <div 
        className={styles.landscapeTop}
        style={{ backgroundImage: `url(${landscapeImage})` }}
      />
      
      <div className={styles.getStartedContent}>
        <div className={styles.contentGrid}>
          <div className={styles.videoSection}>
            <div className={styles.videoContainer}>
              <div className={styles.stepIndicator}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepLabel}>Step</span>
              </div>
              
              <div className={styles.videoPreview}>
                <div className={styles.playButton}>▶</div>
                <div className={styles.formPreview}>
                  <div className={styles.formTitle}>What brings you to Stratosuite Cloud</div>
                  <div className={styles.formFields}>
                    <div className={styles.formField}></div>
                    <div className={styles.formField}></div>
                    <div className={styles.formField}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.textSection}>
            <h2 className={styles.sectionTitle}>Get up and running quickly.</h2>
            <p className={styles.sectionDescription}>
              Get started with Starter Suite, the all-in-one CRM app for 
              marketing, sales, and service.
            </p>
            
            <button className={styles.tryButton}>Try for free</button>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1.</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Set up and start.</h3>
                  <p className={styles.stepDescription}>
                    There's nothing to install. Simply enter your details and you're 
                    ready to get going, right in your browser.
                  </p>
                </div>
              </div>
              
              <div className={styles.step}>
                <span className={styles.stepNum}>2.</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Connect email and sync contacts.</h3>
                </div>
              </div>
              
              <div className={styles.step}>
                <span className={styles.stepNum}>3.</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Bring in your data.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;