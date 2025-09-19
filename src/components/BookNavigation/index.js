// src/components/BookNavigation/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getBookNavigation } from '../../data/booksNavigation';
import styles from './styles.module.css';

export default function BookNavigation({ currentBookSlug }) {
  const navigation = getBookNavigation(currentBookSlug);
  
  return (
    <div className={styles.bookNavigation}>
      <Link to="/books" className={styles.backButton}>
        <ArrowLeft size={16} style={{ marginRight: '4px' }} />
        Back to All Books
      </Link>
      
      {navigation.previous && (
        <Link to={navigation.previous.link} className={styles.previousButton}>
          <ArrowLeft size={16} style={{ marginRight: '4px' }} />
          Previous: {navigation.previous.title}
        </Link>
      )}
      
      {navigation.next && (
        <Link to={navigation.next.link} className={styles.nextButton}>
          Next Review: {navigation.next.title}
          <ArrowRight size={16} style={{ marginLeft: '4px' }} />
        </Link>
      )}
    </div>
  );
}