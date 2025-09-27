import styles from './Footer.module.css';
import landscapeImage from '@/assets/landscape-decoration.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div 
        className={styles.landscapeDecor}
      />
      
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>☁️</span>
              <span className={styles.logoText}>stratosuite</span>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>📱</a>
              <a href="#" className={styles.socialLink}>🐦</a>
              <a href="#" className={styles.socialLink}>💼</a>
              <a href="#" className={styles.socialLink}>📷</a>
              <a href="#" className={styles.socialLink}>📺</a>
              <a href="#" className={styles.socialLink}>🎵</a>
            </div>
            
            <div className={styles.contact}>
              <p>Call us at 1-800-664-9073</p>
              <a href="#" className={styles.contactLink}>See all ways to contact us</a>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>New to Stratosuite?</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.footerLink}>What is CRM?</a></li>
                <li><a href="#" className={styles.footerLink}>Digital Marketing</a></li>
                <li><a href="#" className={styles.footerLink}>Customer Service Software</a></li>
                <li><a href="#" className={styles.footerLink}>Email Marketing</a></li>
                <li><a href="#" className={styles.footerLink}>Ecommerce</a></li>
                <li><a href="#" className={styles.footerLink}>Artificial Intelligence</a></li>
                <li><a href="#" className={styles.footerLink}>Revenue Management Solutions</a></li>
                <li><a href="#" className={styles.footerLink}>AI Agents</a></li>
                <li><a href="#" className={styles.footerLink}>SaaS</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>About Stratosuite</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.footerLink}>What is Stratosuite?</a></li>
                <li><a href="#" className={styles.footerLink}>Newsroom</a></li>
                <li><a href="#" className={styles.footerLink}>Customer Success</a></li>
                <li><a href="#" className={styles.footerLink}>Blog</a></li>
                <li><a href="#" className={styles.footerLink}>Careers</a></li>
                <li><a href="#" className={styles.footerLink}>Trust</a></li>
                <li><a href="#" className={styles.footerLink}>Sustainability</a></li>
                <li><a href="#" className={styles.footerLink}>Investors</a></li>
                <li><a href="#" className={styles.footerLink}>Give us your Feedback</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Popular Links</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.footerLink}>Stratosuite Login</a></li>
                <li><a href="#" className={styles.footerLink}>New Release Features</a></li>
                <li><a href="#" className={styles.footerLink}>Find or Become a Partner</a></li>
                <li><a href="#" className={styles.footerLink}>Dreamforce</a></li>
                <li><a href="#" className={styles.footerLink}>Stratosuite+</a></li>
                <li><a href="#" className={styles.footerLink}>CRM Software</a></li>
                <li><a href="#" className={styles.footerLink}>All Cloud Products</a></li>
                <li><a href="#" className={styles.footerLink}>Product Pricing</a></li>
                <li><a href="#" className={styles.footerLink}>Newsletter Sign-Up ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <div className={styles.regionSelector}>
            <span className={styles.globe}>🌍</span>
            <span>Worldwide</span>
            <span className={styles.dropdown}>▼</span>
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Legal</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Privacy Information</a>
            <a href="#" className={styles.legalLink}>Responsible Disclosure</a>
            <a href="#" className={styles.legalLink}>Trust</a>
            <a href="#" className={styles.legalLink}>Contact</a>
            <a href="#" className={styles.legalLink}>Cookie Preferences</a>
            <a href="#" className={styles.legalLink}>Your Privacy Choices</a>
          </div>
          
          <div className={styles.copyright}>
            <p>© Copyright 2025 Stratosuite, Inc. All rights reserved. Various trademarks held by their respective owners. Stratosuite, Inc. Stratosuite Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;