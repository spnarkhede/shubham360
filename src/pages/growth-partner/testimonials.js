import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Quote, Star, User, Building } from 'lucide-react';

export default function GrowthPartnerTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Product Manager",
      company: "TechCorp Solutions",
      rating: 5,
      testimonial: "Working with Shubham has been transformative for our team. His technical expertise and mentorship approach helped us streamline our development processes and significantly improve our product quality. His ability to translate complex technical concepts into actionable strategies is remarkable.",
      project: "DevOps Implementation & Team Mentorship"
    },
    {
      name: "Michael Rodriguez", 
      role: "CTO",
      company: "StartupXYZ",
      rating: 5,
      testimonial: "Shubham's consulting services were instrumental in scaling our infrastructure. He provided strategic guidance that saved us months of trial and error. His collaborative approach and deep understanding of modern development practices made him an invaluable partner.",
      project: "Technical Architecture Consulting"
    },
    {
      name: "Priya Patel",
      role: "Engineering Manager",
      company: "Innovation Labs",
      rating: 5,
      testimonial: "The mentorship program with Shubham exceeded all expectations. His personalized approach helped our junior developers grow rapidly, and his insights on career development were invaluable. The team's confidence and technical skills improved dramatically.",
      project: "Team Development Program"
    },
    {
      name: "David Thompson",
      role: "Founder",
      company: "GreenTech Ventures",
      rating: 5,
      testimonial: "Shubham's partnership approach is refreshing. Instead of just delivering a solution, he took time to understand our business needs and provided strategic recommendations that aligned with our long-term goals. His technical delivery was flawless.",
      project: "Full-Stack Development Partnership"
    }
  ];

  const stats = [
    { number: "50+", label: "Successful Projects" },
    { number: "25+", label: "Teams Mentored" },
    { number: "15+", label: "Strategic Partnerships" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <DashboardLayout
      role="growth-partner"
      activeTab="testimonials"
      title="Growth Partner | Testimonials"
      description="Client testimonials and feedback for Shubham Narkhede's professional services"
    >
      <SectionTemplate
        title="Client Testimonials"
        subtitle="What partners and clients say about working together"
      >
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.quoteIcon}>
                  <Quote size={24} />
                </div>
                <div className={styles.testimonialRating}>
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <blockquote className={styles.testimonialText}>
                {testimonial.testimonial}
              </blockquote>
              
              <div className={styles.testimonialFooter}>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorIcon}>
                    <User size={20} />
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                    <div className={styles.authorCompany}>
                      <Building size={14} />
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className={styles.projectTag}>
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Success Metrics"
        subtitle="Measuring the impact of our partnerships"
        withBackground={true}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionTemplate>

      <SectionTemplate
        title="Client Feedback Categories"
        subtitle="Common themes in client feedback"
      >
        <div className={styles.feedbackCategories}>
          <div className={styles.categoryCard}>
            <h4>Technical Expertise</h4>
            <p>
              Clients consistently highlight deep technical knowledge, problem-solving abilities, 
              and the ability to work with complex systems and modern technologies.
            </p>
          </div>
          
          <div className={styles.categoryCard}>
            <h4>Communication Skills</h4>
            <p>
              Strong emphasis on clear communication, ability to explain technical concepts, 
              and collaborative approach to working with diverse teams.
            </p>
          </div>
          
          <div className={styles.categoryCard}>
            <h4>Strategic Thinking</h4>
            <p>
              Appreciation for strategic approach to problem-solving, long-term planning, 
              and aligning technical solutions with business objectives.
            </p>
          </div>
          
          <div className={styles.categoryCard}>
            <h4>Mentorship Impact</h4>
            <p>
              Recognition for effective mentorship, team development, and positive impact 
              on individual and team growth trajectories.
            </p>
          </div>
        </div>
      </SectionTemplate>
    </DashboardLayout>
  );
}