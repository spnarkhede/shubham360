const designTimeTrackingSystemPrompt = {
  emoji: '⏱️',
  title: 'Design Time Tracking System',
  description: 'Design an efficient time tracking system with this ChatGPT mega-prompt, addressing user personas, data models, reporting needs, and technical architecture.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Performance',
    'Design',
    'Architecture',
    'Productivity',
    'Workflow',
  ],
  views: 17,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `#CONTEXT:
You are a senior systems analyst and software architect specializing in designing efficient time tracking and analytics systems. Your task is to design a comprehensive system for tracking and analyzing time spent across different work categories, considering the needs of various user personas, data capture methods, reporting requirements, and technical architecture. The goal is to provide a detailed system design specification.

#ROLE:
As a senior systems analyst and software architect, approach this task from the perspective of an expert in designing efficient time tracking and analytics systems. Consider the technical aspects as well as the user experience in your system design.

#RESPONSE GUIDELINES:
1. Begin with a high-level system overview that outlines the main components and their interactions.
2. Identify and describe three key user personas, including their roles, pain points, and requirements. 
3. Outline the data model, including the main entities and their relationships.
4. Describe three time capture methods, providing a name and description for each.
5. Define three key reporting requirements, specifying the report name, description, and required visualizations.
6. Detail the technical architecture, covering the frontend, backend, database, integrations, and security considerations.
7. Provide a phased implementation plan with three phases, including the name, description, deliverables, and timeline for each phase.

#TASK CRITERIA:
1. Ensure the system design is comprehensive, addressing all aspects of time tracking and analytics.
2. Consider the needs of different user personas and design the system to cater to their specific requirements.
3. Provide a clear and concise description of each component, making it easy for stakeholders to understand the system design.
4. Focus on designing an efficient and user-friendly system that minimizes manual effort and maximizes data accuracy.
5. Avoid going into too much technical detail, but ensure that the system design is feasible and can be implemented using modern technologies.

#INFORMATION ABOUT ME:
- Company size: [COMPANY SIZE]
- Industry: [INDUSTRY]
- Primary use case for time tracking: [PRIMARY USE CASE]

#RESPONSE FORMAT:
## System Overview
$system_overview

## User Personas
### Persona 1
- Role: $role
- Pain Points: $pain_points
- Requirements: $requirements

### Persona 2
- Role: $role
- Pain Points: $pain_points
- Requirements: $requirements

### Persona 3
- Role: $role
- Pain Points: $pain_points
- Requirements: $requirements

## Data Model
### Entities
1. $entity1
2. $entity2
3. $entity3

### Relationships
1. $relationship1
2. $relationship2

## Time Capture Methods
### Method 1
- Name: $name
- Description: $description

### Method 2
- Name: $name
- Description: $description

### Method 3
- Name: $name
- Description: $description

## Reporting Requirements
### Report 1
- Name: $name
- Description: $description
- Visualizations: $visualizations

### Report 2
- Name: $name
- Description: $description
- Visualizations: $visualizations

### Report 3
- Name: $name
- Description: $description
- Visualizations: $visualizations

## Technical Architecture
- Frontend: $frontend
- Backend: $backend
- Database: $database
- Integrations: $integrations
- Security: $security

## Implementation Plan
### Phase 1
- Name: $name
- Description: $description
- Deliverables: $deliverables
- Timeline: $timeline

### Phase 2
- Name: $name
- Description: $description
- Deliverables: $deliverables
- Timeline: $timeline

### Phase 3
- Name: $name
- Description: $description
- Deliverables: $deliverables
- Timeline: $timeline`,
  whatItDoes: [
    'Converts user input into a structured system design specification for a time tracking and analytics system.',
    'Outlines key components such as user personas, data models, time capture methods, reporting requirements, and technical architecture.',
    'Provides a phased implementation plan detailing phases, deliverables, and timelines.',
  ],
  tips: [
    'Conduct user research to deeply understand the specific needs and workflows of each persona identified, ensuring the system design is user-centric and enhances productivity.',
    'Develop a prototype of the time tracking system early in the design phase to test with actual users, allowing for iterative feedback and adjustments before finalizing the system specifications.',
    'Establish a robust change management strategy to ensure smooth adoption of the new system, including comprehensive training sessions and support materials tailored to different user personas.',
  ],
  howToUse: [
    'Fill in the [COMPANY SIZE], [INDUSTRY], and [PRIMARY USE CASE] placeholders with specific details about your company. For example, specify the number of employees for company size, the sector your company operates in for industry, and the main reason you are implementing the time tracking system for primary use case.',
    'Example: If your company is a medium-sized tech firm with around 250 employees that needs a time tracking system primarily for improving project management efficiency, you would fill in the placeholders as follows:',
    '[COMPANY SIZE] with "250 employees"',
    '[INDUSTRY] with "Technology"',
    '[PRIMARY USE CASE] with "Project Management Efficiency"',
  ],
};

export default designTimeTrackingSystemPrompt;
