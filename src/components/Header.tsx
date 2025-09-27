import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoIcon}>S</div>
          Stratosuite Cloud
        </a>
        
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><a href="#" className={styles.navLink}>Products</a></li>
            <li><a href="#" className={styles.navLink}>Industries</a></li>
            <li><a href="#" className={styles.navLink}>Customers</a></li>
            <li><a href="#" className={styles.navLink}>Events</a></li>
            <li><a href="#" className={styles.navLink}>Learning</a></li>
            <li><a href="#" className={styles.navLink}>Support</a></li>
            <li><a href="#" className={styles.navLink}>Company</a></li>
          </ul>
        </nav>

        <div className={styles.searchContainer}>
          <svg className={styles.searchIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Ask CloudBot anything" 
            className={styles.searchInput}
          />
        </div>

        <div className={styles.headerActions}>
          <div className={styles.contactInfo}>
            <a href="#" className={styles.contactLink}>Contact Us</a>
            <span className={styles.phoneNumber}>1-800-664-9073</span>
          </div>
          
          <button className={`${styles.headerButton} ${styles.loginButton}`}>
            🌐 Login
          </button>
          
          <button className={`${styles.headerButton} ${styles.tryButton}`}>
            Try for free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;