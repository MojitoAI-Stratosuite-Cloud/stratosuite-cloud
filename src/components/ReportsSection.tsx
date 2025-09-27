import styles from './ReportsSection.module.css';

const ReportsSection = () => {
  const reports = [
    {
      title: 'Stratosuite Cloud is voted the #1 Global Software Company on G2.',
      description: 'Industry recognition for excellence',
      image: '🏆',
      link: 'Get the report'
    },
    {
      title: 'New Valor research reveals how businesses scale AI agents 16x faster with CloudBot.',
      description: 'AI acceleration insights',
      image: '📊',
      link: 'Get the report'
    },
    {
      title: 'Futurum report explains why CloudBot is the fastest path to enterprise value.',
      description: 'Enterprise transformation guide',
      image: '🚀',
      link: 'Get the report'
    }
  ];

  return (
    <section className={styles.reportsSection}>
      <div className={styles.reportsContent}>
        <h2 className={styles.sectionTitle}>
          Hear what the top voices in the industry have to say.
        </h2>
        
        <button className={styles.seeAllButton}>See all reports</button>

        <div className={styles.reportsGrid}>
          {reports.map((report, index) => (
            <div key={index} className={styles.reportCard}>
              <div className={styles.reportImage}>
                <span className={styles.reportIcon}>{report.image}</span>
              </div>
              
              <div className={styles.reportContent}>
                <h3 className={styles.reportTitle}>{report.title}</h3>
                <a href="#" className={styles.reportLink}>{report.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;