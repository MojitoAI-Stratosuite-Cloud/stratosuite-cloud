import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: 'CloudTech Solutions',
      metric: '50%',
      description: 'boost in productivity',
      detail: 'CloudTech saves time with AI-generated emails.',
      link: 'Read the CloudTech story'
    },
    {
      company: 'DataFlow Systems',
      metric: '80%',
      description: 'reduction in call times',
      detail: 'DataFlow cuts call times with Stratosuite Cloud automation.',
      link: 'Read the DataFlow story'
    },
    {
      company: 'TechVantage',
      metric: '20x',
      description: 'increase in ROI',
      detail: 'TechVantage boosts ROI by personalizing every customer experience.',
      link: 'Read the TechVantage story'
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContent}>
        <h2 className={styles.sectionTitle}>Don't just take our word for it.</h2>
        
        <h3 className={styles.sectionSubtitle}>
          See how our customers work smarter, drive automation, and grow revenue.
        </h3>
        
        <p className={styles.sectionDescription}>
          Companies around the globe see eye-popping results with Stratosuite Cloud. You can, too.
        </p>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.cardHeader}>
                <span className={styles.companyName}>{testimonial.company}</span>
              </div>
              
              <div className={styles.metricDisplay}>
                <span className={styles.metric}>{testimonial.metric}</span>
                <span className={styles.metricDescription}>{testimonial.description}</span>
              </div>
              
              <p className={styles.testimonialDetail}>{testimonial.detail}</p>
              
              <a href="#" className={styles.readMoreLink}>{testimonial.link} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;