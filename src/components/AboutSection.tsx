import styles from './AboutSection.module.css';
import landscapeImage from '@/assets/landscape-decoration.png';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div 
        className={styles.landscape}
        style={{ backgroundImage: `url(${landscapeImage})` }}
      />
      
      <div className={styles.aboutContent}>
        <div className={styles.aboutLeft}>
          <h2 className={styles.aboutTitle}>What is Stratosuite Cloud?</h2>
          <p className={styles.aboutDescription}>
            Stratosuite Cloud brings together all your data, from any source, so 
            you can act on it with trusted{' '}
            <a href="#" className={styles.aboutLink}>AI</a> and automation, all on one 
            integrated{' '}
            <a href="#" className={styles.aboutLink}>CRM</a> platform. It makes it easy to find more 
            prospects, close more deals, and connect with customers in 
            a whole new way. So it's little wonder{' '}
            <a href="#" className={styles.aboutLink}>Stratosuite Cloud</a> was named{' '}
            <a href="#" className={styles.aboutLink}>the world's #1 CRM</a> for 11 years running.
          </p>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.demoContainer}>
            <div className={styles.demoHeader}>
              <div className={styles.userAvatar}>LB</div>
              <div className={styles.userInfo}>
                <p className={styles.userName}>Lauren Bailey</p>
                <p className={styles.userLocation}>San Francisco, CA</p>
              </div>
            </div>

            <div className={styles.demoStats}>
              <div className={styles.statBadge}>Gold</div>
              <div className={styles.statBadge}>$5k</div>
            </div>

            <div className={styles.roiText}>31% ROI</div>

            <div className={styles.demoChart}>
              <div className={styles.chartLine}>📈</div>
            </div>

            <div className={styles.testimonial}>
              "I love my new fridge!"
            </div>
          </div>

          <div className={styles.playButtonDemo}>▶</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;