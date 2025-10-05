import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import aiAssistant from '@/assets/ai-assistant.png';
import dashboardMockup from '@/assets/crm-dashboard.png';

const HeroSection = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className={styles.announcementBar}>
        <p className={styles.announcementText}>
          CloudForce passes are going fast. Don't miss the most valuable event for business.{' '}
          <a href="#" className={styles.announcementLink}>Register now</a>
        </p>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Ask CloudBot anything.
            </h1>
            
            <div className={styles.chatInterface}>
              <div className={styles.chatInputContainer}>
                <svg className={styles.chatIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Ask me about products, features, and pricing, or connect to a sales rep."
                  className={styles.chatInput}
                />
                <svg className={styles.sendIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              
              <div className={styles.chatActions}>
                <button className={styles.chatAction}>Connect me with a sales rep</button>
                <button className={`${styles.chatAction} ${styles.chatActionOutline}`}>Show me a CloudBot demo</button>
                <button className={`${styles.chatAction} ${styles.chatActionOutline}`}>How can Stratosuite help my business</button>
              </div>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            <img src={aiAssistant} alt="AI Assistant" className={styles.aiAssistant} />
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className={styles.mainSection}>
        <div className={styles.mainContent}>
            <div className={styles.mainLeft}>
                <p className={styles.brandLine}>Stratosuite Cloud. The #1 AI CRM.</p>
                <h2 className={styles.mainTitle}>
                  <span className={styles.titlePrimary}>Grow faster</span>{' '}
                  <span className={styles.titleSecondary}>and work smarter.</span>
                </h2>
                <p className={styles.mainDescription}>
                  Start simply with Starter Suite, the all-in-one CRM. 
                  Then scale endlessly with autonomous AI agents, 
                  unified data, and CRM apps together on one 
                  integrated platform. And connect with customers in a 
                  whole new way.
                </p>
                <div className={styles.mainActions}>
                  <Link to="/try-for-free" className={styles.primaryButton}>Try for free</Link>
                  <Link to="/watch-demos" className={styles.secondaryButton}>Watch demos</Link>
                </div>
            </div>
          
          <div className={styles.mainRight}>
            <img src={dashboardMockup} alt="CRM Dashboard" className={styles.dashboardMockup} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;