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
