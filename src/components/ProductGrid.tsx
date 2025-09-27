import styles from './ProductGrid.module.css';

const ProductGrid = () => {
  const products = [
    {
      id: 'agentforce',
      title: 'CloudBot',
      description: 'Build and customize autonomous AI agents to support your employees and customers 24/7.',
      link: 'Explore CloudBot',
      icon: '🤖'
    },
    {
      id: 'smallBusiness',
      title: 'Small Business',
      description: 'Help small businesses sell smarter and support faster in a single app.',
      link: 'Explore Small Business',
      icon: '🏪'
    },
    {
      id: 'sales',
      title: 'Sales',
      description: 'Connect teams, close more deals, and simplify your sales process.',
      link: 'Explore Sales',
      icon: '📈'
    },
    {
      id: 'service',
      title: 'Service',
      description: 'Manage customer support cases faster across every channel.',
      link: 'Explore Service',
      icon: '❤️'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Easily build, personalize, and optimize campaigns and journeys.',
      link: 'Explore Marketing',
      icon: '🎯'
    },
    {
      id: 'commerce',
      title: 'Commerce',
      description: 'Engage buyers online and in-store with B2C and B2B commerce.',
      link: 'Explore Commerce',
      icon: '🛒'
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Bring predictive and generative AI experiences to any workflow, user, department, or industry.',
      link: 'Explore AI',
      icon: '🧠'
    },
    {
      id: 'dataCloud',
      title: 'Data Cloud',
      description: 'Unify all your data to power personalized engagement at scale.',
      link: 'Explore Data Cloud',
      icon: '☁️'
    }
  ];

  return (
    <section className={styles.productSection}>
      <div className={styles.productContent}>
        <h2 className={styles.sectionTitle}>
          Get data, analytics, CRM apps, and agents.
        </h2>
        <h3 className={styles.sectionSubtitle}>
          All on one deeply integrated platform.
        </h3>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={`${styles.productCard} ${styles[product.id]}`}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <a href="#" className={styles.cardLink}>{product.link}</a>
                <div className={styles.cardIcon}>{product.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.allPricing}>
          <button className={styles.allPricingButton}>See all pricing</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;