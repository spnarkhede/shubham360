const generateSecureEncryptionScriptPrompt = {
  emoji: '🔒',
  title: 'Generate Secure Encryption Script',
  description: 'Create comprehensive encryption scripts with this AI prompt, ensuring data protection using AES-256, HMAC, and secure key derivation.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'Automation',
    'Scripting',
    'Coding',
    'AI Prompts',
    'Secure',
  ],
  views: 14,
  recommendedTools: [
    'ChatGPT',
    'Grok',
  ],
  prompt: `Adopt the role of an expert cryptographic security engineer who spent a decade implementing enterprise-grade encryption systems at financial institutions before becoming a cybersecurity consultant specializing in data protection for high-risk environments. Your primary objective is to generate comprehensive file compression and encryption scripts that follow cryptographic best practices from Bruce Schneier's "Applied Cryptography" in a step-by-step implementation guide with complete code examples. You understand that data breaches can destroy lives and businesses, so every recommendation must prioritize maximum security while remaining practical for real-world implementation. Apply industry-standard AES-256 encryption with proper key derivation functions, implement HMAC integrity verification, and ensure robust error handling for corrupted archives. Take a deep breath and work on this problem step-by-step.

Create detailed scripts for both compression and encryption processes, implement secure key derivation using PBKDF2 or Argon2, add HMAC-based integrity checks to detect tampering, establish clear naming conventions for encrypted files, provide comprehensive decryption procedures, include error handling for various failure scenarios, and deliver critical warnings about secure password storage and management practices.

#INFORMATION ABOUT ME:
My target files/directories to encrypt: [INSERT FILE PATHS OR DIRECTORY PATHS TO PROTECT]
My preferred encryption password: [INSERT YOUR STRONG ENCRYPTION PASSWORD]
My operating system: [INSERT YOUR OPERATING SYSTEM - WINDOWS/MAC/LINUX]
My technical skill level: [INSERT YOUR TECHNICAL EXPERIENCE LEVEL]
My preferred programming language: [INSERT PREFERRED LANGUAGE - PYTHON/BASH/POWERSHELL]

MOST IMPORTANT!: Structure your response with clear section headings, provide complete working code examples, and format all technical instructions in bullet point format for maximum clarity and implementation safety.`,
  whatItDoes: [
    'Provides a comprehensive guide for creating secure file compression and encryption scripts.',
    'Ensures the use of industry-standard AES-256 encryption with proper key derivation and HMAC integrity checks.',
    'Offers detailed instructions and code examples for implementing robust error handling and secure password management.',
  ],
  tips: [
    'Clearly define the file paths or directories you want to encrypt to ensure the script targets the correct data.',
    'Choose a strong encryption password and store it securely, as it is crucial for the encryption and decryption process.',
    'Familiarize yourself with the programming language you prefer to use, such as Python, Bash, or PowerShell, to effectively implement the script.',
  ],
  howToUse: [
    'Fill in the [INSERT FILE PATHS OR DIRECTORY PATHS TO PROTECT], [INSERT YOUR STRONG ENCRYPTION PASSWORD], [INSERT YOUR OPERATING SYSTEM - WINDOWS/MAC/LINUX], [INSERT YOUR TECHNICAL EXPERIENCE LEVEL], and [INSERT PREFERRED LANGUAGE - PYTHON/BASH/POWERSHELL] placeholders with your specific details.',
    'Example: "My target files/directories to encrypt are located in /home/user/documents. My preferred encryption password is a strong, unique passphrase. I use Linux as my operating system, have intermediate technical skills, and prefer Python for scripting."',
  ],
};

export default generateSecureEncryptionScriptPrompt;
