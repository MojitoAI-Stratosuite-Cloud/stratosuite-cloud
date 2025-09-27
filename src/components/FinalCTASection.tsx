import { Link } from 'react-router-dom';
import styles from './FinalCTASection.module.css';

const FinalCTASection = () => {
  return (
    <section className={styles.finalCTASection}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Get started today.</h2>

        <h3 className={styles.ctaSubtitle}>
          There's nothing to install. No credit card required. Free for 30 days.
        </h3>

        <Link to="/try-for-free" className={styles.ctaButton}>
          Try for free
        </Link>
      </div>
    </section>
  );
};

export default FinalCTASection;
