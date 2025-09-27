import styles from './IntegrationSection.module.css';

const IntegrationSection = () => {
  const apps = [
    { id: 'five9', name: 'Five9', icon: '5️⃣' },
    { id: 'zoom', name: 'Zoom', icon: '📹' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'in' },
    { id: 'dropbox', name: 'Dropbox', icon: '📦' },
    { id: 'panda', name: 'Panda', icon: 'P' },
    { id: 'oce', name: 'OCE', icon: '📡' },
    { id: 'box', name: 'Box', icon: 'box' },
    { id: 'servicemax', name: 'ServiceMax', icon: 'SM' },
    { id: 'otter', name: 'Otter', icon: '🦦' },
    { id: 'conga', name: 'Conga', icon: 'C' }
  ];

  return (
    <section className={styles.integrationSection}>
      <div className={styles.natureDecor} />
      
      <div className={styles.integrationContent}>
        <h2 className={styles.sectionTitle}>Integrate seamlessly.</h2>
        
        <p className={styles.sectionDescription}>
          Stratosuite Cloud works with thousands of partner apps and certified consultants to help you 
          extend Stratosuite Cloud and boost productivity. All are easily discoverable on{' '}
          <a href="#" className={styles.appLink}>AppExchange</a>, 
          the leading enterprise cloud marketplace and home to over 9,000 solutions. Need to 
          connect outside systems? We've got you covered with{' '}
          <a href="#" className={styles.appLink}>MuleSoft</a>, our API platform.
        </p>

        <button className={styles.browseButton}>Browse all apps</button>

        <div className={styles.appShowcase}>
          {apps.map((app) => (
            <div key={app.id} className={`${styles.appIcon} ${styles[app.id]}`}>
              {app.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;