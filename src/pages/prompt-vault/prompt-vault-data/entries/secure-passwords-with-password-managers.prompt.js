const securePasswordsWithPasswordManagersPrompt = {
  emoji: '🔐',
  title: 'Secure Passwords with Password Managers',
  description: 'Implement a robust password management system with this ChatGPT prompt, focusing on encryption, user-friendly interfaces, and secure backup solutions.',
  type: 'Prompts',
  category: 'Productivity',
  tool: 'ChatGPT',
  output: 'Text',
  date: '2026-05-28',
  tags: [
    'Productivity',
    'Time Management',
    'Secure',
    'Passwords',
    'Password',
  ],
  views: 13,
  recommendedTools: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Grok',
  ],
  prompt: `Adopt the role of a cybersecurity expert tasked with implementing a password manager. Your primary objective is to create a secure system for storing and generating strong, unique passwords for various account types. Take a deep breath and work on this problem step-by-step. Begin by outlining the key features of the password manager, including encryption methods, password generation algorithms, and secure storage techniques. Next, develop a user-friendly interface for managing passwords, ensuring ease of use without compromising security. Incorporate a dependency grammar framework to structure account descriptions and notes within the password manager, enhancing organization and readability. Provide clear instructions on how to use the password manager effectively, including best practices for creating and updating passwords. Finally, outline a backup and recovery system to prevent data loss.

#INFORMATION ABOUT ME:
My account types: [INSERT ACCOUNT TYPES]
My preferred encryption method: [INSERT PREFERRED ENCRYPTION METHOD]
My device types: [INSERT DEVICE TYPES]
My preferred backup method: [INSERT PREFERRED BACKUP METHOD]

MOST IMPORTANT!: Provide your output in a structured, step-by-step format with clear headings and subheadings for each major component of the password manager implementation.`,
  whatItDoes: [
    'Outlines the key features of the password manager, including encryption methods, password generation algorithms, and secure storage techniques.',
    'Develops a user-friendly interface for the password manager that balances ease of use with high security.',
    'Provides instructions on effective usage of the password manager, including best practices for password creation and updating, and outlines a backup and recovery system.',
  ],
  tips: [
    'Prioritize the integration of top-tier encryption methods such as AES-256, which is widely recognized for its strength and reliability, to ensure that all stored passwords are protected against unauthorized access.',
    'Design the user interface with simplicity and security in mind, incorporating features like one-click password generation and autofill, while ensuring that these conveniences do not compromise the cryptographic security of the password storage.',
    'Implement a robust backup and recovery system that uses encrypted cloud storage, ensuring that backups are both secure and readily accessible in case of device failure or data loss.',
  ],
  howToUse: [
    'Fill in the placeholders [INSERT ACCOUNT TYPES], [INSERT PREFERRED ENCRYPTION METHOD], [INSERT DEVICE TYPES], and [INSERT PREFERRED BACKUP METHOD] with your specific details. For example, list the types of accounts you need passwords for, your choice of encryption technology, the devices you will use this manager on, and how you prefer to back up data.',
    'Example: "My account types include email, social media, and banking. My preferred encryption method is AES-256. My device types are smartphones and laptops. My preferred backup method is cloud storage."',
  ],
};

export default securePasswordsWithPasswordManagersPrompt;
