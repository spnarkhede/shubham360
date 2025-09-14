import React, { useState } from 'react';
import clsx from 'clsx';
import { Send, User, Mail, MessageSquare, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import styles from './styles.module.css';

const ContactForm = ({ 
  className,
  title = "Get in Touch",
  subtitle = "I'd love to hear from you",
  showTitle = true,
  compact = false,
  onSubmitSuccess,
  onSubmitError
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (!value.trim()) {
          error = 'Subject is required';
        } else if (value.trim().length < 5) {
          error = 'Subject must be at least 5 characters';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
      case 'phone':
        if (value && !/^[\+\-\.\(\)\d\s]+$/.test(value)) {
          error = 'Please enter a valid phone number';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    Object.keys(formData).forEach(field => {
      if (field !== 'company' && field !== 'phone') { // Optional fields
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate field on blur
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Here you would integrate with EmailJS or your preferred email service
      // For now, we'll simulate the submission
      await simulateSubmission();
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
        phone: ''
      });
      setTouched({});
      
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      if (onSubmitError) {
        onSubmitError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const simulateSubmission = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Submission failed'));
        }
      }, 2000);
    });
  };

  const resetForm = () => {
    setSubmitStatus(null);
    setErrors({});
    setTouched({});
  };

  if (submitStatus === 'success') {
    return (
      <div className={clsx(styles.successMessage, className)}>
        <div className={styles.successIcon}>
          <CheckCircle2 size={48} />
        </div>
        <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
        <p className={styles.successDescription}>
          Thank you for reaching out. I'll get back to you as soon as possible, 
          usually within 24 hours.
        </p>
        <button 
          onClick={resetForm}
          className={styles.resetButton}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className={clsx(styles.contactForm, compact && styles.compact, className)}>
      {showTitle && (
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>{title}</h2>
          {subtitle && <p className={styles.formSubtitle}>{subtitle}</p>}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          <AlertCircle size={20} />
          <span>There was an error sending your message. Please try again.</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              <User size={16} />
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={clsx(
                styles.formInput,
                errors.name && styles.inputError,
                touched.name && !errors.name && formData.name && styles.inputSuccess
              )}
              placeholder="Your full name"
              required
            />
            {errors.name && (
              <span className={styles.errorText}>
                <AlertCircle size={14} />
                {errors.name}
              </span>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              <Mail size={16} />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={clsx(
                styles.formInput,
                errors.email && styles.inputError,
                touched.email && !errors.email && formData.email && styles.inputSuccess
              )}
              placeholder="your.email@example.com"
              required
            />
            {errors.email && (
              <span className={styles.errorText}>
                <AlertCircle size={14} />
                {errors.email}
              </span>
            )}
          </div>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.formLabel}>
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Your company (optional)"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={clsx(
                styles.formInput,
                errors.phone && styles.inputError
              )}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <span className={styles.errorText}>
                <AlertCircle size={14} />
                {errors.phone}
              </span>
            )}
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.formLabel}>
            <MessageSquare size={16} />
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={clsx(
              styles.formInput,
              errors.subject && styles.inputError,
              touched.subject && !errors.subject && formData.subject && styles.inputSuccess
            )}
            placeholder="What's this about?"
            required
          />
          {errors.subject && (
            <span className={styles.errorText}>
              <AlertCircle size={14} />
              {errors.subject}
            </span>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={clsx(
              styles.formTextarea,
              errors.message && styles.inputError,
              touched.message && !errors.message && formData.message && styles.inputSuccess
            )}
            placeholder="Tell me about your project, question, or how I can help you..."
            rows={compact ? 4 : 6}
            required
          />
          <div className={styles.characterCount}>
            {formData.message.length}/1000
          </div>
          {errors.message && (
            <span className={styles.errorText}>
              <AlertCircle size={14} />
              {errors.message}
            </span>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
          className={clsx(
            styles.submitButton,
            isSubmitting && styles.submitting
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className={styles.spinner} />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
        
        <p className={styles.formNote}>
          * Required fields. I typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
export { ContactForm };