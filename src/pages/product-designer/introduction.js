import React, { useState } from "react";
import ProductDesignerDashboard from "../../components/ProductDesignerDashboard";
import SectionTemplate from "../../components/SectionTemplate";
import useRoleStore from "../../store/roleStore";
import styles from "./styles.module.css";
import {
  Palette,
  Users,
  Lightbulb,
  Target,
  Award,
  Mail,
  Briefcase,
  Code,
  Building,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  experienceItems,
  designJourneyItems,
  designFocusAreas,
} from "../../data/product-designer/experienceData";

// Create a mapping of icon names to icon components
const iconMap = {
  Briefcase: <Briefcase size={24} />,
  Code: <Code size={24} />,
  Building: <Building size={24} />,
};

export default function ProductDesignerIntroduction() {
  const { activeTab } = useRoleStore();
  const [expandedStudies, setExpandedStudies] = React.useState({});

  // Toggle study expansion
  const toggleStudy = (studyId) => {
    setExpandedStudies((prev) => ({
      ...prev,
      [studyId]: !prev[studyId],
    }));
  };

  // Calculate years and months of experience dynamically from April 2019 to current date
  const startDate = new Date("2019-04-01");
  const currentDate = new Date();
  let diffYears = currentDate.getFullYear() - startDate.getFullYear();
  let diffMonths = currentDate.getMonth() - startDate.getMonth();
  let diffDays = currentDate.getDate() - startDate.getDate();

  // Adjust for negative days
  if (diffDays < 0) {
    diffMonths--;
    // Get the number of days in the previous month
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    diffDays += prevMonth.getDate();
  }

  // Adjust for negative months
  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  // Format the experience string in short format (e.g., 6.5 years)
  const totalYears = diffYears + diffMonths / 12;
  const shortExperienceString = `${totalYears.toFixed(1)} years`;

  return (
    <ProductDesignerDashboard
      role="product-designer"
      activeTab={activeTab["product-designer"]}
      title="Product Designer Portfolio"
      description="Design philosophy, creative process, and portfolio showcase"
    >
      <div className={styles.introductionContainer}>
        {/* Introduction */}
        <SectionTemplate icon={<Target />}>
          <h2 className={styles.profileTitle}>
            My Motivation for Product Design
          </h2>
          <div className={styles.welcomeContent}>
            <p className={styles.profileDescription}>
              My journey into Product Design wasn't a career change—it was a
              career convergence. For the past {shortExperienceString} years,
              I've been building complex technical systems, but I kept coming
              back to the same question:{" "}
              <b>"How does this actually make people's lives easier?"</b> The
              moment I realized that my technical expertise was most powerful
              when it served human needs, I understood that Product Design was
              where I belonged.
            </p>
            <p className={styles.profileDescription}>
              What drives my passion for Product Design is the unique
              opportunity to solve meaningful problems that impact real people's
              work and lives. Having spent years leading cross-functional teams,
              architecting systems that serve millions of users, and witnessing
              firsthand how thoughtful design can transform business efficiency
              by 23% or improve client satisfaction by 25%, I've seen the
              profound impact that user-centered thinking can have on both
              business outcomes and human experience.
            </p>
            <p className={styles.profileDescription}>
              My background may seem unconventional for Product Design, but it's
              actually my greatest strength. I bring a rare combination of
              technical fluency, business acumen, and strategic thinking that
              allows me to bridge the gap between what's possible technically
              and what's needed humanely. At Bosch and Amazon, I collaborated
              directly with UX designers, product managers, and engineers to
              define product scope aligned with business objectives. At Bosch, I
              led the development of tools that increased sales efficiency by
              16% and improved daily task productivity by 23%. These aren't just
              technical achievements—they're proof that when you design with
              both users and business goals in mind, you create solutions that
              truly matter.
            </p>
            <p className={styles.profileDescription}>
              What excites me most about Product Design is the strategic
              thinking it requires: identifying market opportunities,
              understanding user needs, translating business objectives into
              user experiences, and collaborating across diverse teams to bring
              vision to life. I've been doing this work all along, just without
              calling it Product Design. Now, I'm ready to bring this same
              passion and capability directly into a role where I can focus
              entirely on creating products that don't just work—they transform
              how people work and live.
            </p>
          </div>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <Award className={styles.highlightIcon} />
              <span>{shortExperienceString} Experience</span>
            </div>
            <div className={styles.highlight}>
              <Users className={styles.highlightIcon} />
              <span>10+ Projects Delivered</span>
            </div>
            <div className={styles.highlight}>
              <Target className={styles.highlightIcon} />
              <span>User-Centered Approach</span>
            </div>
          </div>
        </SectionTemplate>

        {/* Design Interests */}
        <SectionTemplate title="Design Focus Areas" icon={<Lightbulb />}>
          <div className={styles.interestsGrid}>
            {designFocusAreas.map((area, index) => (
              <div key={index} className={styles.interestCard}>
                <div
                  className={styles.interestIcon}
                  dangerouslySetInnerHTML={{ __html: area.icon }}
                />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </SectionTemplate>

        {/* Design Journey */}
        <SectionTemplate title="My Design Journey" icon={<Target />}>
          <div className={styles.professionalExperienceGrid}>
            {experienceItems.map((item, index) => (
              <div key={index} className={styles.experienceItem}>
                {/* Collapsible Header */}
                <div
                  className={styles.experienceItemHeader}
                  onClick={() => toggleStudy(index)}
                >
                  <h2 className={styles.experienceItemTitle}>
                    <div className={styles.highlightedYear}>{item.year}</div>
                    &nbsp;&nbsp;{item.company}
                  </h2>
                  <span className={styles.toggleIcon}>
                    {expandedStudies[index] ? "−" : "+"}
                  </span>
                </div>

                {/* Collapsible Content */}
                {expandedStudies[index] && (
                  <div className={styles.experienceItemContent}>
                    

                    {/* Influence Section */}
                    <div className={styles.experienceItemSection}>
                      <h3 className={styles.sectionHeading}>
                        <Target className={styles.sectionIcon} size={20} />
                        Influence on Product Design Journey
                      </h3>
                      <div className={styles.sectionGrid}>
                        <div className={styles.detailItem}>
                          <p>{item.influence}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className={styles.experienceItemSection}>
                      <h3 className={styles.sectionHeading}>
                        <Award className={styles.sectionIcon} size={20} />
                        Key Achievements
                      </h3>
                      <div className={styles.sectionGrid}>
                        <div className={styles.detailItem}>
                          <ul className={styles.bulletList}>
                            {item.achievements
                              .slice(0, 5)
                              .map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                          </ul>
                          {item.achievements.length > 5 && (
                            <p>
                              And {item.achievements.length - 5} more
                              achievements...
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* <div className={styles.journeyTimeline}>
            {designJourneyItems.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  <h5>{item.company}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </SectionTemplate>

        {/* Explore Cards */}
        <SectionTemplate title="Explore My Work" icon={<Users />}>
          <div className={styles.exploreCards}>
            <div className={styles.exploreCard}>
              <h3>Design Portfolio</h3>
              <p>View my latest design projects and case studies</p>
              <button className={styles.exploreButton}>View Portfolio</button>
            </div>
            <div className={styles.exploreCard}>
              <h3>Design Process</h3>
              <p>Learn about my design methodology and approach</p>
              <button className={styles.exploreButton}>See Process</button>
            </div>
            <div className={styles.exploreCard}>
              <h3>Tools & Skills</h3>
              <p>Discover the tools and technologies I work with</p>
              <button className={styles.exploreButton}>View Skills</button>
            </div>
          </div>
        </SectionTemplate>

        {/* Call to Action */}
        <SectionTemplate title="Let's Create Together" icon={<Mail />}>
          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Ready to bring your ideas to life? I'm always excited to work on
              new projects and collaborate with passionate teams. Let's discuss
              how we can create something amazing together.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Start a Project</button>
              <button className={styles.secondaryButton}>View My Work</button>
            </div>
          </div>
        </SectionTemplate>
      </div>
    </ProductDesignerDashboard>
  );
}
