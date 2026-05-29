const developWebSocketClientsPrompt = {
  emoji: '🔗',
  title: 'Develop WebSocket Clients',
  description: 'Implement a robust WebSocket client with this AI prompt, ensuring reliable connection management, error handling, and automatic recovery.',
  type: 'Prompts',
  category: 'Coding',
  tool: 'ChatGPT',
  output: 'Code',
  date: '2026-05-28',
  tags: [
    'API',
    'Coding',
    'AI Prompts',
    'WebSocket',
    'Clients',
  ],
  views: 11,
  recommendedTools: [
    'ChatGPT',
    'Gemini',
    'Claude',
    'Grok',
  ],
  prompt: `Adopt the role of an expert WebSocket protocol engineer and real-time systems architect who has spent over a decade building mission-critical communication infrastructure for high-frequency trading platforms, multiplayer gaming systems, and IoT networks. Your primary objective is to guide the user through implementing a robust WebSocket client that follows RFC 6455 specifications and handles all production-level requirements including connection management, error handling, and automatic recovery mechanisms in a comprehensive step-by-step implementation guide. You operate in an environment where connection reliability is paramount - dropped connections cost money, failed handshakes break user experiences, and poor error handling creates cascading system failures. Your implementation must be bulletproof because real-time applications have zero tolerance for unreliable connections. Take a deep breath and work on this problem step-by-step.

Provide detailed implementation guidance covering WebSocket handshake protocol, connection lifecycle management, event handling architecture, message parsing and validation, automatic reconnection with exponential backoff algorithms, heartbeat ping mechanisms, graceful shutdown procedures, and comprehensive error handling strategies. Include code structure recommendations, security considerations for authentication integration, performance optimization techniques, and debugging approaches for common WebSocket issues.

#INFORMATION ABOUT ME:
My WebSocket server URL: [INSERT YOUR WEBSOCKET SERVER URL]
My required subprotocols: [INSERT SUPPORTED SUBPROTOCOLS OR "NONE"]
My authentication method: [INSERT AUTHENTICATION METHOD - TOKEN/BASIC/CUSTOM/NONE]
My programming language preference: [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE]
My specific use case: [INSERT YOUR WEBSOCKET USE CASE - CHAT/TRADING/GAMING/IOT/OTHER]

MOST IMPORTANT!: Structure your response with clear numbered sections and provide implementation steps in bullet point format with code examples and explanations for maximum clarity and practical application.`,
  whatItDoes: [
    'Guides in implementing a robust WebSocket client following RFC 6455 specifications.',
    'Provides detailed steps for connection management, error handling, and automatic recovery.',
    'Ensures reliability in real-time applications with zero tolerance for connection failures.',
  ],
  tips: [
    'Clearly define your WebSocket server URL, supported subprotocols, and authentication method to ensure compatibility and security in your implementation.',
    'Choose a programming language that best suits your WebSocket use case, considering factors like performance, library support, and ease of integration.',
    'Regularly test and debug your WebSocket client using simulation tools to identify and resolve common issues, ensuring a seamless user experience.',
  ],
  howToUse: [
    'Fill in the [INSERT YOUR WEBSOCKET SERVER URL], [INSERT SUPPORTED SUBPROTOCOLS OR "NONE"], [INSERT AUTHENTICATION METHOD - TOKEN/BASIC/CUSTOM/NONE], [INSERT YOUR PREFERRED PROGRAMMING LANGUAGE], and [INSERT YOUR WEBSOCKET USE CASE - CHAT/TRADING/GAMING/IOT/OTHER] placeholders with your specific details for a tailored implementation guide.',
    'Example: "My WebSocket server URL is wss://example.com/socket, I support subprotocols \'chat\' and \'json\', my authentication method is token-based, I prefer using JavaScript, and my use case is a real-time chat application."',
  ],
};

export default developWebSocketClientsPrompt;
