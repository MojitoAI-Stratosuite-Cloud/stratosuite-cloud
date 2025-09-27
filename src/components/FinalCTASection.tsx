import styles from './FinalCTASection.module.css';
import landscapeImage from '@/assets/landscape-decoration.png';

const FinalCTASection = () => {
  return (
    <section className={styles.finalCTASection}>
      <div 
        className={styles.landscapeBottom}
        style={{ backgroundImage: `url(${landscapeImage})` }}
      />
      
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Get started today.</h2>
        
        <h3 className={styles.ctaSubtitle}>
          There's nothing to install. No credit card required. Free for 30 days.
        </h3>
        
        <button className={styles.ctaButton}>Try for free</button>
      </div>
    </section>
  );
};

export default FinalCTASection;