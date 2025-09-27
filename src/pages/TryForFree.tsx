import { useState } from 'react';
import styles from './TryForFree.module.css';

const TryForFree = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>S</div>
        </div>
        
        <h1 className={styles.title}>Let's get you in to your free trial.</h1>
        
        <p className={styles.subtitle}>
          30-day trial. No credit card required, no software to install. Just takes a few minutes.
        </p>
        
        <p className={styles.description}>
          Complete the form to start your free trial. Our team will be in touch to help you make the most of your trial.
        </p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
          
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
          
          <input
            type="text"
            name="jobTitle"
            placeholder="Job title"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
          
          <button type="submit" className={styles.submitButton}>
            Next
          </button>
          
          <div className={styles.progressIndicator}>
            1 of 3
          </div>
        </form>
      </div>
      
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Starting at $25/month.* Stratosuite may establish general practices and limits concerning use of the Stratosuite 
            Starter service, including, without limitation the maximum number of combined Leads and Contacts, which is 
            limited to 2,000 leads and/or contacts and 10 emails per day for the Stratosuite Starter Trial Edition.
          </p>
          <p className={styles.footerSubtext}>
            *USD/user/month (billed monthly or annually).
          </p>
        </div>
        
        <div className={styles.trustBadge}>
          <div className={styles.trustIcon}>🛡️</div>
          <div className={styles.trustText}>
            <div>TRUSTe</div>
            <div>Verified Privacy</div>
            <div>Powered by TrustArc</div>
          </div>
        </div>
      </div>
      
      <div className={styles.globalFooter}>
        <div className={styles.globalFooterContent}>
          <div className={styles.worldwideDropdown}>
            🌐 Worldwide ▼
          </div>
          
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Legal</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
            <a href="#" className={styles.footerLink}>Privacy Information</a>
            <a href="#" className={styles.footerLink}>Responsible Disclosure</a>
            <a href="#" className={styles.footerLink}>Trust</a>
            <a href="#" className={styles.footerLink}>Contact</a>
            <a href="#" className={styles.footerLink}>Cookie Preferences</a>
            <a href="#" className={styles.footerLink}>🔗 Your Privacy Choices</a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          © Copyright 2025 Stratosuite, Inc. All rights reserved. Various trademarks held by their respective owners. Stratosuite, Inc. Stratosuite Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States
        </div>
      </div>
    </div>
  );
};

export default TryForFree;