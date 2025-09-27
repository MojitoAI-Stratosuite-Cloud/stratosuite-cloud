import { useState } from 'react';
import styles from './WatchDemo.module.css';

const WatchDemo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    employees: '',
    phone: '',
    country: 'United States'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>S</div>
        </div>
        
        <h1 className={styles.title}>
          Find more leads, win more deals, and keep customers happy.
        </h1>
        
        <p className={styles.subtitle}>
          Grow your small business faster and build lifelong customer relationships all on one platform.
        </p>
        
        <h3 className={styles.demoTitle}>Watch our demos to see how we can help you:</h3>
        
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            ✓ Build engaging campaigns that quickly turn prospects into customers
          </li>
          <li className={styles.featureItem}>
            ✓ Close more deals with an organized, repeatable sales process
          </li>
          <li className={styles.featureItem}>
            ✓ Track, prioritize, and respond to support issues on every channel
          </li>
          <li className={styles.featureItem}>
            ✓ Grow your way with customization, ready-to-go apps, free training, live experts, and more
          </li>
        </ul>
        
        <p className={styles.contactInfo}>
          Questions? Call us at 1-800-667-6389.
        </p>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Fill out one form to unlock all our resources.</h2>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
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
            </div>
            
            <div className={styles.inputRow}>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.selectContainer}>
              <label className={styles.selectLabel}>Employees</label>
              <select
                name="employees"
                value={formData.employees}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select the number of employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
              {!formData.employees && <div className={styles.errorIndicator}>⚠</div>}
            </div>
            
            <div className={styles.inputRow}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              <div className={styles.countryContainer}>
                <label className={styles.countryLabel}>Country/Region</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={styles.countrySelect}
                >
                  <option value="United States">United States ✓</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>
            
            <p className={styles.privacyText}>
              We value your privacy. To learn more, visit our <a href="#" className={styles.privacyLink}>Privacy Statement</a>.
            </p>
            
            <button type="submit" className={styles.submitButton}>
              WATCH NOW
            </button>
          </form>
        </div>
      </div>
      
      <div className={styles.chatWidget}>
        <div className={styles.chatIcon}>💬 Ask Agentforce</div>
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

export default WatchDemo;