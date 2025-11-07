# shubhamnarkhede
High-performing IT professional with over 5 years of experience in DevOps, full-stack development, and UI/UX design. Passionate about creating efficient, scalable, and user-friendly solutions.

## Theme Configuration
This portfolio is configured with a **default dark theme** featuring:
- Dark blue/purple background (#1a1a2e)
- White buttons with dark text for better contrast
- Responsive design that adapts to all screen sizes
- Optional theme switcher to allow users to toggle between dark and light modes

# Implementation Instructions for Professional Landing Page

This document provides detailed instructions for implementing the new professional landing page with role-based content distribution in your Docusaurus portfolio website.

## Overview of Components

The landing page system consists of the following components:

1. **Welcome Screen**: A clean initial page with logo and welcome text (Dark theme optimized)
2. **Role Selection Interface**: Allows visitors to select their role with white button styling
3. **Role-Specific Pages**: Four different pages with content tailored to each visitor type
4. **Art Gallery Component**: Showcases your artwork in the Growth Partner section
5. **Navigation Guide**: Helps users understand the role-based navigation system

## File Structure

```
|-- blog
    |-- 2018
        |-- 2018-01-05-futureofai.md
        |-- 2018-01-12-readbodylanguagelikefbi.md
        |-- 2018-02-15-my-journey-in-software-development.md
        |-- images
            |-- blog1_futureai.webp
    |-- 2019
        |-- 2019-05-10-first-steps-at-amazon.md
    |-- 2020
        |-- 2020-10-15-transitioning-to-bosch-rexroth.md
    |-- 2021
        |-- 2021-03-08-leadershipmindset.md
        |-- images
            |-- leadership.webp
    |-- 2022
        |-- 2022-08-20-devops-at-robert-bosch.md
    |-- 2023
        |-- 2023-03-15-five-years-in-tech.md
    |-- 2024
        |-- 2024-01-10-future-of-devops.md
    |-- authors.yml
    |-- tags.yml
|-- clean-lucide-imports.js
|-- compress-images.js
|-- docs
    |-- ComputerScience
        |-- DevOpsTools
            |-- Docker
                |-- DockerBasicNotes.md
                |-- DockerizeAngularSetup.md
                |-- DockerOperations.md
                |-- DockerTool&TermCheatsheet.md
            |-- _category_.json
        |-- index.md
        |-- Programming
            |-- Git
                |-- figures
                    |-- 6_free_software_licenses.webp
                    |-- gitcheatsheet.webp
                    |-- GitObjects.webp
                    |-- GitPackfile.webp
                |-- GitBasicNotes.md
            |-- Nvm
                |-- NvmUserGuide.md
            |-- Vim
                |-- VimBasicNotes.md
                |-- VimCheatSheet.md
            |-- _category_.json
        |-- WebTechnologies
            |-- Angular
                |-- AngularBasicNotes.md
            |-- CSS
                |-- BootstrapBasicNotes.md
                |-- CSSAdvancedNotes.md
                |-- CSSAnimationNotes.md
                |-- CSSBasicNotes.md
            |-- HTML
                |-- HTMLBasicNotes.md
            |-- _category_.json
        |-- _category_.json
    |-- intro.md
    |-- Languages
        |-- German
            |-- Intensive A1.1
            |-- Intensive A1.2
            |-- Intensive A2.1
            |-- Intensive A2.2
            |-- Intensive B1.1
            |-- Intensive B1.2
            |-- Intensive B2.1
            |-- Intensive B2.2
            |-- Intensive C1.1
        |-- _category_.json
    |-- MyLearnings
        |-- HardReset
            |-- 50PsychologySkills.md
            |-- 90DaysHardReset.md
            |-- LifeFormula.md
        |-- _category_.json
    |-- Portfolio
        |-- img
        |-- pdf
        |-- Resume.md
        |-- _category_.json
    |-- profilepic.webp
    |-- ToolsCollection
        |-- AdblockingPrivacy.md
        |-- AndroidIos.md
        |-- ArtificialIntelligence.md
        |-- BeginnersGuide.md
        |-- DeveloperTools.md
        |-- Downloading.md
        |-- Educational.md
        |-- FileTools.md
        |-- Gaming.md
        |-- GamingTools.md
        |-- ImageTools.md
        |-- InternetTools.md
        |-- LinuxMacos.md
        |-- Listening.md
        |-- Miscellaneous.md
        |-- NonEnglish.md
        |-- Reading.md
        |-- SocialMediaTools.md
        |-- Streaming.md
        |-- SystemTools.md
        |-- TextTools.md
        |-- Torrenting.md
        |-- VideoTools.md
    |-- _category_.json
|-- docusaurus.config.ts
|-- LICENSE
|-- package-lock.json
|-- package.json
|-- PROJECT_STATUS.md
|-- README.md
|-- remove-unused-lucide-icons.js
|-- sidebars.ts
|-- src
    |-- components
        |-- ArtGallery
            |-- index.js
            |-- styles.module.css
        |-- BookNavigation
            |-- index.js
            |-- styles.module.css
        |-- ContactForm
            |-- index.js
            |-- styles.module.css
        |-- ContactPanel
            |-- index.js
            |-- styles.module.css
        |-- ContinueExploring
            |-- index.js
            |-- styles.module.css
        |-- CuriousVisitorDashboard
            |-- index.js
            |-- styles.module.css
        |-- DashboardLayout
            |-- index.js
            |-- styles.module.css
        |-- ExperienceTimeline
            |-- index.js
            |-- styles.module.css
        |-- GrowthPartnerDashboard
            |-- index.js
            |-- styles.module.css
        |-- HomepageFeatures
            |-- index.js
        |-- LatestArticles
            |-- index.js
            |-- styles.module.css
        |-- MainNavigation
            |-- index.js
            |-- styles.module.css
        |-- ProductDesignerDashboard
            |-- index.js
            |-- styles.module.css
        |-- RecommendationsPanel
            |-- index.js
            |-- styles.module.css
        |-- ResumeCenter
            |-- index.js
            |-- styles.module.css
        |-- SectionTemplate
            |-- index.js
            |-- styles.module.css
        |-- SkillsMatrix
            |-- index-tech.js
            |-- index.js
            |-- styles.module.css
        |-- SpotifyPodcast
            |-- index.js
            |-- styles.module.css
        |-- TechEnthusiastDashboard
            |-- index.js
            |-- styles.module.css
        |-- Timeline
            |-- index.js
            |-- styles.module.css
        |-- ToolCollections
            |-- index.js
            |-- styles.module.css
    |-- css
        |-- custom.css
        |-- _aboutme.css
        |-- _books.css
        |-- _certificates.css
        |-- _contact.css
        |-- _projects.css
        |-- _timeline.css
    |-- data
        |-- booksNavigation.js
        |-- recruitment-specialist
            |-- content.js
            |-- projectsData.js
    |-- index.d.ts
    |-- pages
        |-- articles
            |-- ai-revolution-2025.js
            |-- future-of-jobs-report-2025.js
            |-- generative-ai-enterprise.js
            |-- index.js
            |-- quantum-computing-business.js
            |-- styles.module.css
        |-- books
        |-- books.js
        |-- contact.js
        |-- curious-visitor
            |-- index.js
            |-- introduction.js
            |-- styles.module.css
            |-- travel.js
        |-- docusaurus.module.css
        |-- growth-partner
            |-- index.js
            |-- introduction.js
            |-- styles.module.css
            |-- testimonials.js
        |-- home.js
        |-- index.js
        |-- landing.js
        |-- landing.module.css
        |-- markdown-page.md
        |-- navigation-guide.js
        |-- navigation-guide.module.css
        |-- Portfolio
            |-- Certificates.js
            |-- Experience.js
            |-- Projects.js
            |-- styles.module.css
        |-- product-designer
            |-- index.js
            |-- introduction.js
            |-- styles.module.css
        |-- recruitment-specialist
            |-- components
                |-- PersonalityChart.js
                |-- PersonalityChart.module.css
                |-- ProfessionalTimeline.js
                |-- ProfessionalTimeline.module.css
            |-- contact.js
            |-- continue-watching.js
            |-- experience.js
            |-- index.js
            |-- introduction.js
            |-- personality.js
            |-- projects.js
            |-- recommendations.js
            |-- resume.js
            |-- skills.js
            |-- styles.module.css
        |-- role-pages.module.css
        |-- tech-enthusiast
            |-- index.js
            |-- introduction.js
            |-- styles.module.css
            |-- tool-collection.js
    |-- store
        |-- roleStore.js
|-- static
    |-- .nojekyll
    |-- documents
        |-- summary_resume.pdf
    |-- img
        |-- books
        |-- docusaurus-social-card.webp
        |-- docusaurus.webp
        |-- favicon.ico
        |-- logo.webp
        |-- profile.webp
        |-- profileintro.webp
        |-- profilepic.webp
        |-- profilesquare.webp
        |-- undraw_docusaurus_mountain.svg
        |-- undraw_docusaurus_react.svg
        |-- undraw_docusaurus_tree.svg
|-- tailwind.config.js
|-- tsconfig.json
|-- updateMarkdown.js

```

## Implementation Steps

### 1. Add New Files to Your Project

Copy all the provided files to the corresponding locations in your Docusaurus project structure. Make sure to maintain the exact file paths as shown above.

### 2. Configure Homepage Redirect

The `docusaurus.js` file is set up to redirect visitors from the homepage to the new landing page. This ensures that all visitors first see the welcome screen and role selection interface.

If you prefer to keep your original homepage and make the landing page accessible via a different route, you can modify the redirect or create a navigation link to the landing page from your existing homepage.

### 3. Add Your Content

#### Welcome Screen (landing.js)

- Replace the placeholder logo with your own logo by updating the image path
- Customize the welcome text and subtitle to match your personal brand

#### Role-Specific Pages

Each role-specific page (talent-seeker.js, tech-enthusiast.js, curious-visitor.js, growth-partner.js) is pre-populated with sample content. You should:

- Update the professional summary and descriptions to reflect your actual experience and skills
- Ensure the links point to the correct pages in your portfolio
- Customize the sections to highlight the most relevant aspects of your work for each audience

#### Art Gallery (growth-partner.js)

The Growth Partner page includes the Art Gallery component. To add your artwork:

1. Create an `/img/art/` directory in your Docusaurus `static` folder
2. Add your artwork images to this directory
3. Update the `artworks` array in `growth-partner.js` with your actual artwork information:
   - title
   - description
   - image path
   - medium
   - year

### 4. Styling Customization

The CSS modules provide a consistent design across all components. You can customize the styling by:

- Adjusting the color variables to match your brand colors
- Modifying the spacing, typography, or layout as needed
- Adding additional styles for custom elements

The styles are already set up to work with Docusaurus's dark/light mode toggle and are fully responsive.

### 5. Testing

Before deploying, test the following:

- Navigation between all pages works correctly
- Role selection interface functions properly
- Art Gallery component displays your artwork correctly
- All pages are responsive on different screen sizes
- Dark/light mode toggle works across all components
- All links point to valid destinations

## Additional Customization Options

### Adding More Roles

If you need to add more visitor roles:

1. Create a new role-specific page following the pattern of existing pages
2. Add the role to the role selection interface in `landing.js`
3. Update the navigation guide to include the new role

### Modifying the Art Gallery

The Art Gallery component can be customized by:

- Changing the layout in `ArtGallery.module.css`
- Adding filtering capabilities for different art categories
- Implementing a lightbox for full-screen image viewing

### SEO Optimization

Each page includes basic SEO metadata. Enhance this by:

- Adding more detailed descriptions
- Including relevant keywords
- Setting up Open Graph tags for social sharing

## Troubleshooting

### Common Issues

1. **Images not displaying**: Ensure image paths are correct and images are in the right directory
2. **Styling inconsistencies**: Check for CSS conflicts with existing styles
3. **Navigation errors**: Verify all route paths match your Docusaurus configuration

### Support

If you encounter any issues implementing these components, please refer to:

- Docusaurus documentation: https://docusaurus.io/docs
- React documentation: https://reactjs.org/docs
- CSS Modules documentation: https://github.com/css-modules/css-modules

## Conclusion

This landing page system provides a professional, role-based experience for your portfolio visitors. By following these implementation instructions, you'll create a personalized journey for different audience types while showcasing your technical skills, professional experience, and creative work.




# Key Improvement Areas for Role-Based Portfolio

Based on the analysis of the existing repository and the new requirements, here are the key areas that need improvement:

| **Main Section**                                   | **Subtopics**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Landing Page: The Dynamic Gateway**              | - Dynamic Hero (animated/video background) <br> - Value Proposition + Rotating Tagline <br> - Personal Branding (photo + title) <br> - CTA: Explore My Portfolio                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Navigation Guide: The Intelligent Navigator**    | - Interactive Persona Selection (Recruiter, Tech Enthusiast, Curious Visitor, Growth Partner, Product Designer) <br> - Brief Persona Value Proposition <br> - Visual Cues (icons, colors, micro-animations) <br> - Quick Tour / Overview Button <br> - Smart Defaults & Exit Option                                                                                                                                                                                                                                                                                                               |
| **Recruiter-Specialist: The Professional Dossier** | - Video / Dynamic Introduction <br> - Interactive Experience Timeline <br> - Skills Matrix / Heatmap <br> - Certifications Showcase <br> - Personality Insights (professional context) <br> - Recommendations & Endorsements <br> - Featured Projects (business impact) <br> - Resume Download <br> - Continue Watching / Next Steps                                                                                                                                                                                                                                                              |
| **Tech Enthusiast: The Deep Dive**                 | - Technical Introduction (philosophy, stack) <br> - Technical Expertise Graph / Tree <br> - Project Case Studies (5–7) <br> - Code Samples (interactive playground) <br> - Technical Articles / Blog (with tags, reading time, Medium integration) <br> - Certifications & Badges (technical detail) <br> - Learnings & Notes (knowledge base) <br> - AI Tools & Resources Links <br> - Open Source Contributions <br> - Stack Overflow Profile Integration <br> - Continue Exploring / Contact                                                                                                   |
| **Curious Visitor: The Personal Journey**          | - Narrative Introduction (personal story/video) <br> - Personality & Numerology (laws of nature insights) <br> - Life & Work Experience Timeline <br> - Creative Portfolio (Painting, Sketching, Photography, etc.) <br> - Art Gallery Section <br> - Interactive Bookshelf (reviews, takeaways) <br> - Hobbies Showcase (Music, Gaming, Team Events) <br> - Travel & Adventures (interactive map, stories) <br> - Digital Presence (Instagram, YouTube) <br> - Spotify Integration (podcast/playlist) <br> - Special Journey: 64 Arts of Krishna (interactive microsite) <br> - Connect / Follow |
| **Growth Partner: The Collaboration Hub**          | - Introduction to Collaboration <br> - Collaborators Showcase <br> - Mentorship Program & Offerings <br> - Joint Projects Showcase <br> - Services Offered <br> - Partnership Opportunities <br> - Testimonials (collaboration-focused) <br> - CTA: Propose a Collaboration                                                                                                                                                                                                                                                                                                                       |
| **Product Designer: The Creative Visionary**       | - Introduction & Design Philosophy <br> - Interactive Design Portfolio <br> - Design Process Walkthrough (animated) <br> - Case Studies (3–5 projects) <br> - Tools & Skills (design software) <br> - Client Reviews & Testimonials <br> - Contact for Design Projects                                                                                                                                                                                                                                                                                                                            |
| **General Section: Contact**                       | - Integrated Contact Form <br> - Direct Email <br> - Professional Social Links (LinkedIn, GitHub, Twitter) <br> - Scheduling Link (Calendly) <br> - Location/Timezone (optional)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Global Elements**                                | - Enhanced Footer (copyright, sitemap, policies) <br> - Accessibility Widget <br> - SEO Optimization (meta, sitemap, robots.txt) <br> - Performance Monitoring (Google Analytics, Lighthouse)                                                                                                                                                                                                                                                                                                                                                                                                     |


These improvement areas will guide the development of a detailed enhancement plan to transform the existing portfolio into the required role-based structure.
