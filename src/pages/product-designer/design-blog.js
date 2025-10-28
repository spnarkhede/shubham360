import React, { useState, useMemo } from 'react';
import { Search, Tag, Calendar, Clock, User } from 'lucide-react';
import styles from './blog-styles.module.css';

// Blog post data - in a real app, this would come from reading markdown files
const blogPosts = [
  
];

// Simple date formatting function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Short date formatting function
const formatShortDate = (dateString) => {
  const options = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Simple markdown renderer
const renderMarkdown = (content) => {
  // Split content into lines
  const lines = content.split('\n');
  const elements = [];
  let listType = null;
  let listItems = [];
  
  lines.forEach((line, index) => {
    // Headings
    if (line.startsWith('# ')) {
      elements.push(<h1 key={index}>{line.replace('# ', '')}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={index}>{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={index}>{line.replace('### ', '')}</h3>);
    } 
    // Lists
    else if (line.startsWith('- ')) {
      if (listType !== 'ul') {
        if (listType && listItems.length > 0) {
          elements.push(
            listType === 'ul' ? 
            <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
            <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
          );
          listItems = [];
        }
        listType = 'ul';
      }
      listItems.push(<li key={index}>{line.replace('- ', '')}</li>);
    } else if (line.match(/^\d+\.\s/)) {
      if (listType !== 'ol') {
        if (listType && listItems.length > 0) {
          elements.push(
            listType === 'ul' ? 
            <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
            <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
          );
          listItems = [];
        }
        listType = 'ol';
      }
      listItems.push(<li key={index}>{line.replace(/^\d+\.\s/, '')}</li>);
    }
    // Tables
    else if (line.includes('|') && line.split('|').length > 2) {
      // Close any open list
      if (listType && listItems.length > 0) {
        elements.push(
          listType === 'ul' ? 
          <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
          <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
        );
        listItems = [];
        listType = null;
      }
      
      // Simple table parsing
      if (line.trim().startsWith('|')) {
        const cells = line.split('|').filter(cell => cell.trim() !== '');
        if (cells.length > 0) {
          elements.push(
            <table key={index}>
              <tbody>
                <tr>
                  {cells.map((cell, cellIndex) => (
                    <th key={cellIndex}>{cell.trim()}</th>
                  ))}
                </tr>
              </tbody>
            </table>
          );
        }
      }
    }
    // Blockquotes
    else if (line.startsWith('> ')) {
      // Close any open list
      if (listType && listItems.length > 0) {
        elements.push(
          listType === 'ul' ? 
          <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
          <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
        );
        listItems = [];
        listType = null;
      }
      elements.push(<blockquote key={index}><p>{line.replace('> ', '')}</p></blockquote>);
    }
    // Code blocks
    else if (line.startsWith('`') && line.endsWith('`')) {
      // Close any open list
      if (listType && listItems.length > 0) {
        elements.push(
          listType === 'ul' ? 
          <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
          <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
        );
        listItems = [];
        listType = null;
      }
      elements.push(<code key={index}>{line.slice(1, -1)}</code>);
    }
    // Paragraphs
    else if (line.trim() !== '') {
      // Close any open list
      if (listType && listItems.length > 0) {
        elements.push(
          listType === 'ul' ? 
          <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
          <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
        );
        listItems = [];
        listType = null;
      }
      elements.push(<p key={index}>{line}</p>);
    } else {
      // Empty line - close any open list
      if (listType && listItems.length > 0) {
        elements.push(
          listType === 'ul' ? 
          <ul key={`list-${index}`} className={styles.bulletList}>{listItems}</ul> : 
          <ol key={`list-${index}`} className={styles.bulletList}>{listItems}</ol>
        );
        listItems = [];
        listType = null;
      }
      elements.push(<br key={index} />);
    }
  });
  
  // Close any remaining list
  if (listType && listItems.length > 0) {
    elements.push(
      listType === 'ul' ? 
      <ul key="final-list" className={styles.bulletList}>{listItems}</ul> : 
      <ol key="final-list" className={styles.bulletList}>{listItems}</ol>
    );
  }
  
  return elements;
};

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery) return blogPosts;
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogLayout}>
        {/* Main Blog View */}
        <div className={styles.mainContent}>
          <article className={styles.blogPost}>
            <header className={styles.postHeader}>
              <h1 className={styles.postTitle}>{selectedPost.title}</h1>
              
              <div className={styles.postMeta}>
                <div className={styles.metaItem}>
                  <Calendar size={16} />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
                <div className={styles.metaItem}>
                  <User size={16} />
                  <span>{selectedPost.author}</span>
                </div>
              </div>
              
              <div className={styles.postTags}>
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </header>
            
            {selectedPost.image && (
              <div className={styles.featuredImage}>
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
            )}
            
            <div className={styles.postContent}>
              {renderMarkdown(selectedPost.content)}
            </div>
          </article>
        </div>
        
        {/* Sidebar Blog List */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.sidebarTitle}>All Articles</h2>
            
            <div className={styles.searchBox}>
              <Search size={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
          
          <div className={styles.blogList}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`${styles.blogItem} ${
                  selectedPost.id === post.id ? styles.active : ''
                }`}
              >
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                
                <div className={styles.blogMeta}>
                  <div className={styles.blogDate}>
                    <Calendar size={14} />
                    <span>{formatShortDate(post.date)}</span>
                  </div>
                  <div className={styles.blogReadTime}>
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className={styles.blogTags}>
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className={styles.blogTag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;