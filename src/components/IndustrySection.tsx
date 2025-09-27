import styles from './IndustrySection.module.css';

const IndustrySection = () => {
  const industries = [
    {
      id: 'financial',
      title: 'Financial Services',
      description: 'Unlock the most valuable currency: customer trust.',
      icon: '🏦'
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Acquire profitable customers faster with unified, real-time data.',
      icon: '🛍️'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      description: 'Build stronger patient and member relationships on a connected platform.',
      icon: '❤️'
    },
    {
      id: 'construction',
      title: 'Construction & Real Estate',
      description: 'Streamline processes and achieve operational excellence to drive profitability and growth.',
      icon: '🏗️'
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Elevate the education experience with the #1 AI CRM for learner and institution success.',
      icon: '🎓'
    },
    {
      id: 'professional',
      title: 'Professional Services',
      description: 'Increase client trust, recruit and retain the right talent, and build a vibrant work culture.',
      icon: '💼'
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Automate workflows, unify and integrate data, and thrive in a new era of tech, powered by trusted AI.',
      icon: '💻'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Integrate all your data across a unified value chain to better serve customers and channel partners.',
      icon: '⚙️'
    }
  ];

  return (
    <section className={styles.industrySection}>
      <div className={styles.industryContent}>
        <h2 className={styles.sectionTitle}>
          Find the right solution for your company —
        </h2>
        <h3 className={styles.sectionSubtitle}>
          any size, any industry.
        </h3>

        <div className={styles.industryGrid}>
          {industries.map((industry) => (
            <div key={industry.id} className={styles.industryCard}>
              <h3 className={styles.cardTitle}>{industry.title}</h3>
              <p className={styles.cardDescription}>{industry.description}</p>
              <a href="#" className={styles.cardLink}>Learn more</a>
              <div className={styles.cardIcon}>{industry.icon}</div>
            </div>
          ))}
        </div>

        <button className={styles.seeAllButton}>See all industries</button>
      </div>
    </section>
  );
};

export default IndustrySection;