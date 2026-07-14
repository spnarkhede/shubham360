const templatePrompt = {
  // ── Identity ───────────────────────────────────────────────────────────────
  emoji: '🧩',
  title: 'HackerRank Full‑Stack Problem‑Solving Template',
  description: 'A complete, step‑by‑step framework for understanding, architecting, coding, and validating any full‑stack HackerRank problem — with built‑in accuracy proof and code quality standards.',

  // ── Classification ─────────────────────────────────────────────────────────
  type: 'Prompts',
  category: 'Coding',
  tool: 'Any',
  output: 'Text',
  date: '2026-05-28',
  tags: ['HackerRank', 'full-stack', 'problem-solving', 'coding standards', 'validation', 'React', 'Node.js'],
  views: 0,

  // ── Tools ──────────────────────────────────────────────────────────────────
  recommendedTools: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'],

  // ── Prompt Text ────────────────────────────────────────────────────────────
  prompt: `# HackerRank Problem-Solving Prompt Template
## Complete Process for Understanding & Solving Any Full-Stack Problem

---

## SECTION 1: PROBLEM UNDERSTANDING

### Step 1A: Read & Extract Core Information

\`\`\`
WHEN YOU GET A PROBLEM, EXTRACT THIS:

┌─ PROBLEM TITLE ────────────────────────────────────────┐
│ What is the problem called?                            │
└────────────────────────────────────────────────────────┘

┌─ PROBLEM DESCRIPTION ──────────────────────────────────┐
│ What needs to be done?                                │
│ (Read 3 times - once for overview, twice for details) │
└────────────────────────────────────────────────────────┘

┌─ INPUT SPECIFICATION ──────────────────────────────────┐
│ What data comes IN?                                    │
│ - Format? (JSON, form, API, array, string?)           │
│ - Example input?                                      │
│ - Constraints? (size, type, range?)                   │
└────────────────────────────────────────────────────────┘

┌─ OUTPUT SPECIFICATION ─────────────────────────────────┐
│ What data comes OUT?                                   │
│ - Format? (JSON, HTML, number, string, array?)        │
│ - Example output?                                     │
│ - How should it look?                                 │
└────────────────────────────────────────────────────────┘

┌─ LOGIC/REQUIREMENTS ───────────────────────────────────┐
│ What happens in the middle?                           │
│ - Step 1: ___________                                │
│ - Step 2: ___________                                │
│ - Step 3: ___________                                │
└────────────────────────────────────────────────────────┘

┌─ EDGE CASES ───────────────────────────────────────────┐
│ What could break?                                     │
│ - Empty input?                                        │
│ - Null/undefined values?                              │
│ - Very large numbers?                                 │
│ - Special characters?                                 │
└────────────────────────────────────────────────────────┘

┌─ TECHNOLOGY STACK ─────────────────────────────────────┐
│ Frontend: React? Vue? HTML? ________                   │
│ Backend: Node.js? Express? ________                    │
│ Database: Yes/No? What type? ________                  │
│ API Communication: REST? GraphQL? ________             │
└────────────────────────────────────────────────────────┘
\`\`\`

---

## SECTION 2: ARCHITECTURE PLANNING

### Step 2A: Design the Solution Structure

\`\`\`
BEFORE CODING, ANSWER THESE QUESTIONS:

┌─ IS THIS A FRONTEND PROBLEM? ──────────────────────────┐
│ YES → Need React component(s)                         │
│ - Which component(s)?                                 │
│ - What state do I need?                               │
│ - What props to pass?                                 │
└────────────────────────────────────────────────────────┘

┌─ IS THIS A BACKEND PROBLEM? ───────────────────────────┐
│ YES → Need Express route(s)                           │
│ - Which routes? (GET, POST, PUT, DELETE?)             │
│ - What data structure?                                │
│ - How to validate input?                              │
└────────────────────────────────────────────────────────┘

┌─ IS THIS A FULL-STACK PROBLEM? ────────────────────────┐
│ YES → Need both Frontend + Backend                     │
│ - How do they communicate?                            │
│ - What API endpoint?                                  │
│ - Error handling?                                     │
└────────────────────────────────────────────────────────┘

┌─ DATA FLOW DIAGRAM ────────────────────────────────────┐
│ USER INPUT                                            │
│    ↓                                                   │
│ REACT COMPONENT (handle input)                        │
│    ↓                                                   │
│ API CALL TO BACKEND                                   │
│    ↓                                                   │
│ NODE.JS ROUTE (process logic)                         │
│    ↓                                                   │
│ RESPONSE BACK TO FRONTEND                             │
│    ↓                                                   │
│ DISPLAY RESULT                                        │
└────────────────────────────────────────────────────────┘
\`\`\`

---

## SECTION 3: SOLUTION CODING STANDARDS

### Apply These Rules to ALL Code:

\`\`\`
RULE 1: NAMING CONVENTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Bad:   const x = []; const fn = (a) => a + 1;
✓ Good:  const userTasks = []; const increaseCount = (n) => n + 1;

RULE 2: ONE FUNCTION = ONE TASK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Bad:   const handleClick = () => { validate(); process(); save(); }
✓ Good:  
  const validateInput = (value) => { /* only validation */ }
  const processData = (data) => { /* only processing */ }
  const saveData = (data) => { /* only saving */ }
  const handleClick = () => {
    if (validateInput(input)) {
      const result = processData(input);
      saveData(result);
    }
  }

RULE 3: COMMENTS EXPLAIN "WHY", NOT "WHAT"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Bad:   const count = 0; // Set count to 0
✓ Good:  const count = 0; // Initialize counter to track user actions

RULE 4: CLEAR VARIABLE NAMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Bad:   let tmp = data.filter(x => x.v > 10);
✓ Good:  let highValueItems = data.filter(item => item.value > 10);

RULE 5: HANDLE ERRORS EXPLICITLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Bad:   const result = await fetch(url);
✓ Good:  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('API call failed');
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }

RULE 6: VALIDATE ALL INPUTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❌ Bad:   const addUser = (name) => { users.push(name); }
✓ Good:  
  const addUser = (name) => {
    if (!name || name.trim() === '') {
      return { success: false, error: 'Name is required' };
    }
    users.push(name.trim());
    return { success: true, data: name };
  }

RULE 7: USE CONSISTENT FORMATTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- 2 spaces for indentation
- camelCase for variables
- PascalCase for components/classes
- CONSTANT_CASE for constants
- Clear line breaks between sections
\`\`\`

---

## SECTION 4: SOLUTION TEMPLATE

### Follow This Structure for Every Solution:

\`\`\`javascript
// ════════════════════════════════════════════════════════════
// PROBLEM: [Title of Problem]
// PURPOSE: [What this solves]
// INPUT: [What data comes in]
// OUTPUT: [What result is produced]
// ════════════════════════════════════════════════════════════

// SECTION A: IMPORTS & SETUP
// ─────────────────────────────────────────────────────────
import React, { useState, useEffect } from 'react';
import express from 'express';
// ... other imports

// SECTION B: INITIALIZE DATA / CONSTANTS
// ─────────────────────────────────────────────────────────
const BACKEND_URL = 'http://localhost:5000/api';
const DEFAULT_STATE = { /* ... */ };

// SECTION C: UTILITY FUNCTIONS (Non-React)
// ─────────────────────────────────────────────────────────
// These functions do ONE task each

// Function 1: Validate input
const validateInput = (value) => {
  // Return true/false
};

// Function 2: Transform data
const transformData = (rawData) => {
  // Transform and return
};

// SECTION D: REACT COMPONENT (If Frontend)
// ─────────────────────────────────────────────────────────
const MyComponent = ({ props }) => {
  // State
  const [state, setState] = useState(null);
  
  // Effects
  useEffect(() => {
    // Load data on mount
  }, []);
  
  // Event handlers
  const handleAction = () => {
    // Handle event
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// SECTION E: EXPRESS ROUTES (If Backend)
// ─────────────────────────────────────────────────────────
app.get('/api/resource', (req, res) => {
  // Get logic
});

app.post('/api/resource', (req, res) => {
  // Create logic
});

// SECTION F: EXPORT
// ─────────────────────────────────────────────────────────
export default MyComponent;
// OR
module.exports = router;
\`\`\`

---

## SECTION 5: VALIDATION CHECKLIST

### Before Submitting Your Code, Check:

\`\`\`
CODE QUALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] All variables have clear, descriptive names
[ ] Each function does one task only
[ ] Comments explain the "why", not the "what"
[ ] No unused variables or imports
[ ] Consistent indentation and formatting
[ ] No console errors or warnings
[ ] Error handling for all possible failures

FUNCTIONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] All features work as specified
[ ] Can handle the example input/output
[ ] Edge cases are handled
[ ] Empty/null inputs don't crash
[ ] Invalid data shows error message

TESTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Tested with provided example input
[ ] Tested with edge cases
[ ] Tested with invalid input
[ ] All buttons/actions work
[ ] No console errors

DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Code is well-commented
[ ] Can explain what each part does
[ ] Can explain the overall architecture
[ ] Can explain why this solution works
\`\`\`

---

## SECTION 6: ACCURACY EXPLANATION FRAMEWORK

### When You Solve a Problem, Prove It's 100% Accurate By:

\`\`\`
FRAMEWORK FOR PROVING ACCURACY:

1️⃣  INPUT VALIDATION
   "I checked if the problem asks for [specific input].
    My code accepts exactly that format.
    Example: If it needs an array of objects, I validate that."

2️⃣  LOGIC CORRECTNESS
   "My solution follows these steps:
    Step 1: [Explain what happens]
    Step 2: [Explain what happens]
    Step 3: [Explain what happens]
    This matches the problem requirements exactly."

3️⃣  OUTPUT VERIFICATION
   "The problem expects [specific format].
    My code produces exactly [specific format].
    Example: If it should return JSON, I return JSON."

4️⃣  EDGE CASE HANDLING
   "I tested with these edge cases:
    - Empty input → [what happens]
    - Null value → [what happens]
    - Large data → [what happens]
    All are handled correctly."

5️⃣  ERROR HANDLING
   "I catch and handle errors for:
    - Invalid user input
    - API failures
    - Database errors
    - Network issues
    Each error has a proper response."

6️⃣  EXAMPLE VERIFICATION
   "I traced through the example:
    Input: [example from problem]
    Step 1: [what my code does]
    Step 2: [what my code does]
    Final Output: [matches expected output]"

7️⃣  CODE REVIEW
   "My code:
    ✓ Follows best practices
    ✓ Uses proper naming conventions
    ✓ Has no code smells
    ✓ Is maintainable and readable"
\`\`\`

---

## SECTION 7: HOW TO RESPOND TO YOUR PROBLEM

### When You Give Me a Problem, I Will:

\`\`\`
STEP 1: EXTRACT & CLARIFY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Read your problem statement and extract:
- Problem title
- What input is given
- What output is expected
- What logic/calculations needed
- Any constraints or edge cases

STEP 2: ASK CLARIFYING QUESTIONS (If Needed)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
If anything is unclear, I'll ask:
"Does this mean...?"
"Should I handle...?"
"What if...?"

STEP 3: DESIGN ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Show the data flow:
User Input → Component → API → Backend → Response → Display

STEP 4: WRITE COMPLETE SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Following coding standards:
- Simple variable names
- Clear comments
- Proper error handling
- All edge cases covered

STEP 5: EXPLAIN EACH PART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For each function/component:
- What it does
- How it works
- Why it's needed
- What inputs it accepts
- What output it produces

STEP 6: PROVE 100% ACCURACY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Using the framework from Section 6:
- Show input validation
- Show logic correctness
- Show output matches expected format
- Show edge cases handled
- Show error handling
- Trace through example
- Code review checklist

STEP 7: PROVIDE TESTING GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tell you:
- How to test it
- What test cases to use
- What to expect for each test
- How to verify it works
\`\`\`

---

## SECTION 8: EXAMPLE ACCURACY EXPLANATION

### Example Problem:
\`\`\`
Problem: Create a React component that takes a user input string 
and displays it reversed.

Input: User types "hello"
Output: Display shows "olleh"
\`\`\`

### My Solution:

\`\`\`javascript
// ════════════════════════════════════════════════════════════
// PROBLEM: Reverse String Display Component
// PURPOSE: Take user input and display it reversed
// INPUT: String from user
// OUTPUT: Reversed string displayed on screen
// ════════════════════════════════════════════════════════════

import React, { useState } from 'react';

const ReverseStringComponent = () => {
  // STATE: Store the user's input text
  const [inputText, setInputText] = useState('');
  
  // FUNCTION: Reverse the string
  // Why separate: Keeps logic independent from React
  const reverseString = (text) => {
    // Convert string to array, reverse it, join back
    return text.split('').reverse().join('');
  };
  
  // FUNCTION: Handle user typing
  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setInputText(userInput);
  };
  
  // FUNCTION: Get reversed text
  // Why separate function: Can test independently
  const reversedText = reverseString(inputText);
  
  // RENDER: Show input and reversed output
  return (
    <div>
      <h1>String Reverser</h1>
      
      {/* Input field for user to type */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      
      {/* Display reversed text */}
      <p>Original: {inputText || '(empty)'}</p>
      <p>Reversed: {reversedText || '(empty)'}</p>
    </div>
  );
};

export default ReverseStringComponent;
\`\`\`

### WHY THIS SOLUTION IS 100% ACCURATE:

\`\`\`
1️⃣  INPUT VALIDATION
   ✓ Component accepts any string from user
   ✓ Handles empty string (shows "empty")
   ✓ Handles special characters
   ✓ Handles numbers

2️⃣  LOGIC CORRECTNESS
   ✓ Step 1: Take input text
   ✓ Step 2: Split into array of characters
   ✓ Step 3: Reverse the array
   ✓ Step 4: Join back into string
   RESULT: String is perfectly reversed

3️⃣  OUTPUT VERIFICATION
   ✓ Problem asks for: Display reversed string
   ✓ My code does: Displays reversedText in <p> tag
   ✓ Format matches: Plain text on page
   ✓ Example: Input "hello" → Output "olleh" ✓

4️⃣  EDGE CASE HANDLING
   ✓ Empty string "" → Shows "(empty)" ✓
   ✓ Single character "a" → Shows "a" ✓
   ✓ Special chars "!@#" → Shows "#@!" ✓
   ✓ Spaces " a b " → Shows " b a " ✓
   ✓ Numbers "123" → Shows "321" ✓

5️⃣  ERROR HANDLING
   ✓ No way for this to crash
   ✓ Invalid input doesn't break component
   ✓ No API calls that could fail
   ✓ No database errors possible

6️⃣  EXAMPLE VERIFICATION
   Trace: User types "hello"
   → inputText = "hello"
   → reverseString("hello")
      → "hello".split('') = ['h','e','l','l','o']
      → reverse() = ['o','l','l','e','h']
      → join('') = "olleh"
   → Display shows: "olleh" ✓ CORRECT

7️⃣  CODE REVIEW
   ✓ Variable names are clear
   ✓ Each function does one task
   ✓ Comments explain purpose
   ✓ No unused code
   ✓ Proper React patterns
   ✓ No console errors
   ✓ Readable and maintainable

CONCLUSION: This solution is 100% accurate because:
- It accepts the correct input
- It processes it correctly
- It produces the exact output required
- It handles all edge cases
- It has no errors
- It matches the problem requirements perfectly
\`\`\`

---

## SECTION 9: READY TO USE

### To Use This Prompt:

Simply provide me with:

1. **The HackerRank Problem Statement** (Copy paste it)
2. **Example Input/Output** (If provided)
3. **Any Special Requirements** (If mentioned)

Then I will:
1. Extract problem details using Section 1
2. Plan architecture using Section 2
3. Write solution using Section 3 & 4
4. Apply validation using Section 5
5. Explain accuracy using Section 6 & 8
6. Provide complete explanation

---

## QUICK CHECKLIST FOR YOU

Before giving me a problem, make sure you have:

\`\`\`
[ ] Problem statement copied
[ ] Example input ready
[ ] Example output ready
[ ] Any constraints or requirements noted
[ ] Technology stack mentioned (React? Node? Both?)
[ ] Time limit noted (if any)
\`\`\`

Then say: **"Here's my HackerRank problem:"** and paste it.

I'll solve it completely with 100% accuracy explanation.

---

**You're ready to solve any HackerRank problem! 🚀**`,

  // ── Structured Sections (shown in modal detail view) ───────────────────────
  whatItDoes: [
    'Provides a complete, step‑by‑step framework for solving full‑stack HackerRank problems — from understanding requirements and designing architecture to writing clean code and proving 100% accuracy.',
    'Includes coding standards (naming, single‑responsibility, error handling, input validation), a ready‑to‑use solution template, and a validation checklist to ensure production‑ready output.',
    'Features a built‑in accuracy explanation framework that forces you to verify input, logic, output, edge cases, error handling, and example traces — perfect for interview preparation or automated code reviews.',
  ],

  tips: [
    'Copy the entire prompt as a single message to the AI, then paste your problem statement after it — the AI will follow every section in order.',
    'For best results, include all provided example inputs/outputs and specify the exact tech stack (React/Node/etc.) the problem expects.',
    'Use the generated solution as a learning tool: study the architecture, the validation steps, and the accuracy proof to understand how to approach similar problems.',
    'If the problem is purely algorithmic (no frontend/backend), the prompt still works — just skip the technology‑specific sections and focus on the logic and accuracy framework.',
  ],

  howToUse: [
    'Copy the entire prompt text from the "prompt" field above.',
    'Paste it into your preferred AI tool (ChatGPT, Claude, Gemini, etc.).',
    'Then provide your HackerRank problem statement, including example input/output and any special constraints.',
    'The AI will respond with a complete solution, following the 9‑section structure — including a clear explanation of why the solution is 100% accurate.',
    'Review the output, test the code, and use the validation checklist to ensure it meets all requirements.',
  ],
};

export default templatePrompt;