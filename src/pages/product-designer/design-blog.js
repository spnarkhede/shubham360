import React, { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import ProductDesignerDashboard from '@site/src/components/ProductDesignerDashboard';
import styles from './blog-styles.module.css';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState('design-systems');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog post metadata - in a real app, this would come from reading markdown files
  const blogPosts = [
    {
      id: 'design-systems',
      title: 'Building Scalable Design Systems',
      date: '2024-01-15',
      readTime: '8 min read',
      author: 'Shubham Narkhede',
      tags: ['Design Systems', 'UI/UX', 'Frontend'],
      excerpt: 'Learn how to create design systems that scale with your product and team.',
      path: '/product-designer/blogs/design-systems'
    },
    {
      id: 'prototyping',
      title: 'Rapid Prototyping Strategies',
      date: '2023-11-22',
      readTime: '6 min read',
      author: 'Shubham Narkhede',
      tags: ['Prototyping', 'Design Process', 'Tools'],
      excerpt: 'Speed up your design process with effective prototyping techniques.',
      path: '/product-designer/blogs/prototyping'
    },
    {
      id: 'user-research',
      title: 'Effective User Research Techniques',
      date: '2023-12-10',
      readTime: '10 min read',
      author: 'Shubham Narkhede',
      tags: ['User Research', 'UX', 'Methodology'],
      excerpt: 'Practical approaches to gathering meaningful user insights for product design.',
      path: '/product-designer/blogs/user-research'
    }
  ];

  // Filter blog posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <ProductDesignerDashboard role="product-designer" activeTab="design-blog">
      <div className={styles.blogContainer}>
        <div className={styles.blogLayout}>
          {/* Main Blog View - iframe */}
          <div className={styles.mainContent}>
            <iframe 
              src={`/product-designer/blogs/${selectedPost}`} 
              className={styles.iframeContent}
              title={selectedPost}
            />
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
                  onClick={() => setSelectedPost(post.id)}
                  className={`${styles.blogItem} ${
                    selectedPost === post.id ? styles.active : ''
                  }`}
                >
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <div className={styles.blogTags}>
                    {post.tags.map((tag, index) => (
                      <span key={index} className={styles.blogTag}>
                        <FileText size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProductDesignerDashboard>
  );
};

export default BlogSection;