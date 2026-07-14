const templatePrompt = {
    // ── Identity ───────────────────────────────────────────────────────────────
    emoji: '🧠',
    title: 'HackerRank Advanced Problem‑Solving (React & Node)',
    description: 'A comprehensive strategy guide for full‑stack HackerRank assessments – covering pre‑test prep, problem‑solving frameworks, code best practices, explanation templates, and a submission checklist, all in one master prompt.',
  
    // ── Classification ─────────────────────────────────────────────────────────
    type: 'Prompts',
    category: 'Coding',
    tool: 'Any',
    output: 'Text',
    date: '2026-05-28',
    tags: ['HackerRank', 'full-stack', 'React', 'Node.js', 'problem-solving', 'interview'],
    views: 0,
  
    // ── Tools ──────────────────────────────────────────────────────────────────
    recommendedTools: ['ChatGPT', 'Claude', 'Gemini'],
  
    // ── Prompt Text ────────────────────────────────────────────────────────────
    prompt: `# Master Prompt: HackerRank Full-Stack Engineer (React & Node) Hiring Test Strategy
  
  ## Table of Contents
  1. Pre-Test Preparation
  2. Problem-Solving Framework
  3. Code Writing Best Practices
  4. Explanation Template
  5. Complete Examples
  6. Checklist Before Submission
  
  ---
  
  ## Part 1: Pre-Test Preparation
  
  ### What You Need to Know
  Before starting any problem, understand these key points:
  
  **Read the Problem Three Times:**
  1. First read: Get the general idea
  2. Second read: Identify inputs and outputs
  3. Third read: Understand edge cases and requirements
  
  **Ask These Questions:**
  - What is the input? (user data, form, API call)
  - What is the output? (display, response, state)
  - What happens in the middle? (logic, calculation, transformation)
  - Are there edge cases? (empty input, null values, errors)
  
  ---
  
  ## Part 2: Problem-Solving Framework
  
  ### Step-by-Step Approach
  
  \`\`\`
  STEP 1: UNDERSTAND THE REQUIREMENT
  ┌─────────────────────────────────────────┐
  │ Read problem carefully                  │
  │ Write down: Input → Output → Logic      │
  │ Example: Create a TODO list component   │
  │   - Input: User types a task name       │
  │   - Output: Task appears in list        │
  │   - Logic: Add to state, render list    │
  └─────────────────────────────────────────┘
  
  STEP 2: PLAN THE STRUCTURE
  ┌─────────────────────────────────────────┐
  │ React Components:                       │
  │ - Which components do I need?           │
  │ - What state do I need?                 │
  │ - What props to pass?                   │
  │                                         │
  │ Node Backend:                           │
  │ - Which routes do I need?               │
  │ - What database operations?             │
  │ - How to handle errors?                 │
  └─────────────────────────────────────────┘
  
  STEP 3: WRITE SIMPLE CODE
  ┌─────────────────────────────────────────┐
  │ Use clear variable names                │
  │ One task per function                   │
  │ Add comments for each section           │
  │ Test as you go                          │
  └─────────────────────────────────────────┘
  
  STEP 4: TEST & EXPLAIN
  ┌─────────────────────────────────────────┐
  │ Test with sample input                  │
  │ Explain what each part does             │
  │ Show understanding of concepts          │
  └─────────────────────────────────────────┘
  \`\`\`
  
  ---
  
  ## Part 3: Code Writing Best Practices
  
  ### Naming Convention (Simple & Clear)
  
  \`\`\`javascript
  // AVOID: Confusing names
  const x = [];
  const fn = (a) => a + 1;
  
  // USE: Simple, descriptive names
  const userTasks = [];
  const increaseCount = (number) => number + 1;
  \`\`\`
  
  ### Structure: One Task Per Function
  
  \`\`\`javascript
  // AVOID: Multiple tasks in one function
  const handleTodoClick = (id) => {
    // Delete task
    tasks = tasks.filter(t => t.id !== id);
    // Update localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Show alert
    alert('Task deleted');
  };
  
  // USE: Separate functions for each task
  // Function 1: Remove task from list
  const deleteTaskFromList = (taskId, taskList) => {
    return taskList.filter(task => task.id !== taskId);
  };
  
  // Function 2: Save to storage
  const saveTasksToStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  // Function 3: Show notification
  const showDeleteConfirmation = () => {
    alert('Task deleted successfully');
  };
  
  // Function 4: Handle click event (combines all three)
  const handleTaskDelete = (taskId) => {
    // Remove from list
    const updatedTasks = deleteTaskFromList(taskId, tasks);
    
    // Save changes
    saveTasksToStorage(updatedTasks);
    
    // Show message
    showDeleteConfirmation();
    
    // Update state
    setTasks(updatedTasks);
  };
  \`\`\`
  
  ### Comment Strategy: Explain "Why", Not "What"
  
  \`\`\`javascript
  // AVOID: Comments that repeat the code
  const userName = "Shubham"; // Set userName to "Shubham"
  tasks.map(task => task.completed); // Map tasks to completed
  
  // USE: Comments that explain purpose and logic
  // Extract only completed tasks to show progress
  const completedTasks = tasks.filter(task => task.completed);
  
  // User name is stored separately to allow profile customization later
  const userName = "Shubham";
  
  // Calculate percentage of tasks finished
  const progressPercentage = (completedTasks.length / tasks.length) * 100;
  \`\`\`
  
  ---
  
  ## Part 4: React Component Template (Simple)
  
  ### Basic React Component Structure
  
  \`\`\`javascript
  // ============================================
  // COMPONENT: TaskInput
  // PURPOSE: Allow user to enter new tasks
  // INPUT: Function to add task
  // OUTPUT: Form input field
  // ============================================
  
  import React, { useState } from 'react';
  
  const TaskInput = ({ onAddTask }) => {
    // STATE: Store the text user is typing
    const [inputValue, setInputValue] = useState('');
    
    // FUNCTION: Update state when user types
    const handleInputChange = (event) => {
      const userTypedText = event.target.value;
      setInputValue(userTypedText);
    };
    
    // FUNCTION: Send task to parent when user clicks "Add"
    const handleAddButtonClick = () => {
      // Don't add empty tasks
      if (inputValue.trim() === '') {
        alert('Please enter a task');
        return;
      }
      
      // Send task to parent component
      onAddTask(inputValue);
      
      // Clear the input field
      setInputValue('');
    };
    
    // RENDER: Show input field and button
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddButtonClick}>
          Add Task
        </button>
      </div>
    );
  };
  
  export default TaskInput;
  \`\`\`
  
  ### Complex React Component (Step-by-Step)
  
  \`\`\`javascript
  // ============================================
  // COMPONENT: TaskList
  // PURPOSE: Display all tasks and allow delete/complete
  // INPUT: Array of tasks, function to delete
  // OUTPUT: List of tasks with actions
  // ============================================
  
  import React, { useState } from 'react';
  
  const TaskList = ({ tasks, onDeleteTask, onCompleteTask }) => {
    // STEP 1: Create function to mark task as complete
    const handleCompleteTask = (taskId) => {
      // Call parent function with task ID
      onCompleteTask(taskId);
    };
    
    // STEP 2: Create function to delete task
    const handleDeleteTask = (taskId) => {
      // Confirm before deleting
      const shouldDelete = window.confirm('Delete this task?');
      
      if (shouldDelete) {
        // Call parent function with task ID
        onDeleteTask(taskId);
      }
    };
    
    // STEP 3: Handle empty list
    if (tasks.length === 0) {
      return <p>No tasks yet. Add one to get started!</p>;
    }
    
    // STEP 4: Render list of tasks
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Display task name */}
            <span>
              {task.name}
            </span>
            
            {/* Show if task is completed */}
            {task.isCompleted && <span>(✓ Completed)</span>}
            
            {/* Button to mark as complete */}
            <button onClick={() => handleCompleteTask(task.id)}>
              Mark Done
            </button>
            
            {/* Button to delete task */}
            <button onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  \`\`\`
  
  ---
  
  ## Part 5: Node.js Backend Template (Simple)
  
  ### Basic Express Server Structure
  
  \`\`\`javascript
  // ============================================
  // FILE: server.js
  // PURPOSE: Create backend API for task management
  // ROUTES: GET, POST, DELETE tasks
  // ============================================
  
  // IMPORT: Required libraries
  const express = require('express');
  const cors = require('cors');
  const app = express();
  
  // MIDDLEWARE: Allow requests from frontend
  app.use(cors());
  app.use(express.json()); // Parse JSON data
  
  // DATABASE: Store tasks in memory (for learning)
  let tasks = [
    { id: 1, name: 'Learn React', isCompleted: false },
    { id: 2, name: 'Learn Node.js', isCompleted: false }
  ];
  
  // COUNTER: Generate unique IDs
  let nextTaskId = 3;
  
  // ============================================
  // ROUTE 1: GET all tasks
  // REQUEST: GET /api/tasks
  // RESPONSE: Array of all tasks
  // ============================================
  app.get('/api/tasks', (request, response) => {
    // Send all tasks as JSON
    response.json({
      success: true,
      data: tasks,
      message: 'Tasks retrieved successfully'
    });
  });
  
  // ============================================
  // ROUTE 2: CREATE a new task
  // REQUEST: POST /api/tasks
  // BODY: { name: "Task name" }
  // RESPONSE: New task with ID
  // ============================================
  app.post('/api/tasks', (request, response) => {
    // STEP 1: Get task name from request
    const taskName = request.body.name;
    
    // STEP 2: Validate input
    if (!taskName || taskName.trim() === '') {
      return response.status(400).json({
        success: false,
        message: 'Task name is required'
      });
    }
    
    // STEP 3: Create new task object
    const newTask = {
      id: nextTaskId,           // Unique ID
      name: taskName,           // Task name from user
      isCompleted: false        // New tasks are not completed
    };
    
    // STEP 4: Add to tasks array
    tasks.push(newTask);
    nextTaskId++;
    
    // STEP 5: Send success response
    response.status(201).json({
      success: true,
      data: newTask,
      message: 'Task created successfully'
    });
  });
  
  // ============================================
  // ROUTE 3: DELETE a task
  // REQUEST: DELETE /api/tasks/:taskId
  // RESPONSE: Success message
  // ============================================
  app.delete('/api/tasks/:taskId', (request, response) => {
    // STEP 1: Get task ID from URL
    const taskIdToDelete = parseInt(request.params.taskId);
    
    // STEP 2: Find task in array
    const taskIndex = tasks.findIndex(task => task.id === taskIdToDelete);
    
    // STEP 3: Check if task exists
    if (taskIndex === -1) {
      return response.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }
    
    // STEP 4: Remove from array
    const deletedTask = tasks.splice(taskIndex, 1);
    
    // STEP 5: Send success response
    response.json({
      success: true,
      data: deletedTask[0],
      message: 'Task deleted successfully'
    });
  });
  
  // ============================================
  // ROUTE 4: UPDATE task (Mark as complete)
  // REQUEST: PUT /api/tasks/:taskId
  // BODY: { isCompleted: true }
  // RESPONSE: Updated task
  // ============================================
  app.put('/api/tasks/:taskId', (request, response) => {
    // STEP 1: Get task ID from URL
    const taskIdToUpdate = parseInt(request.params.taskId);
    
    // STEP 2: Find task in array
    const task = tasks.find(t => t.id === taskIdToUpdate);
    
    // STEP 3: Check if task exists
    if (!task) {
      return response.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }
    
    // STEP 4: Update task properties
    task.isCompleted = request.body.isCompleted;
    
    // STEP 5: Send updated task
    response.json({
      success: true,
      data: task,
      message: 'Task updated successfully'
    });
  });
  
  // ============================================
  // START SERVER
  // PORT: 5000
  // ============================================
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
    console.log('Backend is ready to receive requests from React');
  });
  \`\`\`
  
  ---
  
  ## Part 6: Connect React to Node (Frontend Calling Backend)
  
  ### React Component That Calls API
  
  \`\`\`javascript
  // ============================================
  // COMPONENT: TaskManager
  // PURPOSE: Fetch tasks from backend and display
  // FEATURES: Load, create, delete, update tasks
  // ============================================
  
  import React, { useState, useEffect } from 'react';
  import TaskInput from './TaskInput';
  import TaskList from './TaskList';
  
  const TaskManager = () => {
    // STATE: Store tasks and loading status
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    // BACKEND URL: Where Node.js server is running
    const BACKEND_URL = 'http://localhost:5000/api';
    
    // ============================================
    // FUNCTION 1: Fetch tasks from backend
    // Called when component first loads
    // ============================================
    useEffect(() => {
      fetchTasksFromBackend();
    }, []); // Empty array means run once on load
    
    const fetchTasksFromBackend = async () => {
      try {
        setIsLoading(true);
        
        // STEP 1: Make request to backend
        const response = await fetch(\`\${BACKEND_URL}/tasks\`);
        
        // STEP 2: Check if response is successful
        if (!response.ok) {
          throw new Error('Failed to load tasks');
        }
        
        // STEP 3: Parse JSON response
        const result = await response.json();
        
        // STEP 4: Update state with fetched tasks
        setTasks(result.data);
        setErrorMessage('');
        
      } catch (error) {
        // Handle error
        console.error('Error fetching tasks:', error);
        setErrorMessage('Could not load tasks. Check if backend is running.');
      } finally {
        setIsLoading(false);
      }
    };
    
    // ============================================
    // FUNCTION 2: Add new task
    // Called when user submits form
    // ============================================
    const handleAddTask = async (taskName) => {
      try {
        // STEP 1: Send new task to backend
        const response = await fetch(\`\${BACKEND_URL}/tasks\`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: taskName
          })
        });
        
        // STEP 2: Check if creation was successful
        if (!response.ok) {
          throw new Error('Failed to create task');
        }
        
        // STEP 3: Parse response
        const result = await response.json();
        
        // STEP 4: Add new task to state
        setTasks([...tasks, result.data]);
        
      } catch (error) {
        console.error('Error adding task:', error);
        setErrorMessage('Could not add task');
      }
    };
    
    // ============================================
    // FUNCTION 3: Delete task
    // Called when user clicks delete button
    // ============================================
    const handleDeleteTask = async (taskId) => {
      try {
        // STEP 1: Send delete request to backend
        const response = await fetch(\`\${BACKEND_URL}/tasks/\${taskId}\`, {
          method: 'DELETE'
        });
        
        // STEP 2: Check if deletion was successful
        if (!response.ok) {
          throw new Error('Failed to delete task');
        }
        
        // STEP 3: Remove from state
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        
      } catch (error) {
        console.error('Error deleting task:', error);
        setErrorMessage('Could not delete task');
      }
    };
    
    // ============================================
    // FUNCTION 4: Mark task as complete
    // Called when user clicks complete button
    // ============================================
    const handleCompleteTask = async (taskId) => {
      try {
        // STEP 1: Send update request to backend
        const response = await fetch(\`\${BACKEND_URL}/tasks/\${taskId}\`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            isCompleted: true
          })
        });
        
        // STEP 2: Check if update was successful
        if (!response.ok) {
          throw new Error('Failed to update task');
        }
        
        // STEP 3: Parse response
        const result = await response.json();
        
        // STEP 4: Update state with new task data
        const updatedTasks = tasks.map(task => 
          task.id === taskId ? result.data : task
        );
        setTasks(updatedTasks);
        
      } catch (error) {
        console.error('Error updating task:', error);
        setErrorMessage('Could not complete task');
      }
    };
    
    // ============================================
    // RENDER: Show loading, error, or task list
    // ============================================
    return (
      <div>
        <h1>My Task Manager</h1>
        
        {/* Show loading message */}
        {isLoading && <p>Loading tasks...</p>}
        
        {/* Show error message */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        
        {/* Show form to add new task */}
        <TaskInput onAddTask={handleAddTask} />
        
        {/* Show list of tasks */}
        {!isLoading && (
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onCompleteTask={handleCompleteTask}
          />
        )}
      </div>
    );
  };
  
  export default TaskManager;
  \`\`\`
  
  ---
  
  ## Part 7: Explanation Template
  
  ### How to Explain Your Solution (Use This Format)
  
  \`\`\`
  EXPLANATION TEMPLATE FOR YOUR CODE:
  
  1. WHAT I DID
     "I created a React component called TaskInput that allows users to type 
      a new task and submit it."
  
  2. HOW I DID IT (Step-by-step)
     "First, I used useState hook to store the text the user types.
      Then, I created a handleInputChange function that updates the state 
      whenever the user types.
      Finally, when the user clicks 'Add', I validate that the input is not 
      empty, then call the parent's onAddTask function with the new task."
  
  3. WHY I DESIGNED IT THIS WAY
     "I separated the form input into its own component because:
      - It's reusable in other parts of the app
      - It keeps the logic simple and focused
      - The parent component can decide what to do with new tasks"
  
  4. EDGE CASES I HANDLED
     "I added validation to prevent empty tasks being added.
      I also clear the input field after successful submission."
  
  5. HOW TO USE IT
     "Pass onAddTask prop with a function that receives the task name.
      The component will call that function when user clicks 'Add'."
  \`\`\`
  
  ---
  
  ## Part 8: Complete Example (TODO App - Full Stack)
  
  ### Problem: Create a TODO Application
  - User can add tasks
  - User can mark tasks as complete
  - User can delete tasks
  - Data persists in backend
  
  ### Solution Structure:
  \`\`\`
  frontend/
    ├── App.js (Main component)
    ├── TaskInput.js (Form)
    ├── TaskList.js (List display)
    └── TaskManager.js (Handle logic)
  
  backend/
    └── server.js (Express API)
  \`\`\`
  
  ### Step 1: Backend (Node.js)
  See "Part 5: Node.js Backend Template" above
  
  ### Step 2: React Components
  See "Part 4: React Component Template" and "Part 6: Connect React to Node" above
  
  ### Step 3: Main App File
  
  \`\`\`javascript
  // ============================================
  // FILE: App.js
  // PURPOSE: Main entry point
  // RENDERS: TaskManager component
  // ============================================
  
  import React from 'react';
  import TaskManager from './TaskManager';
  import './App.css';
  
  function App() {
    return (
      <div className="App">
        <header>
          <h1>Task Manager Application</h1>
          <p>Built with React & Node.js</p>
        </header>
        
        <main>
          <TaskManager />
        </main>
      </div>
    );
  }
  
  export default App;
  \`\`\`
  
  ### Step 4: CSS (Keep it Simple)
  
  \`\`\`css
  /* App.css */
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  .App {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    padding: 10px;
    background: white;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  \`\`\`
  
  ---
  
  ## Part 9: Checklist Before Submission
  
  ### Code Quality Checklist
  - [ ] Variable names are clear and descriptive
  - [ ] Each function does one thing only
  - [ ] Added comments explaining WHY, not WHAT
  - [ ] Used proper indentation and formatting
  - [ ] No unused variables or imports
  - [ ] Error handling for all API calls
  - [ ] Validation for user inputs
  
  ### Functionality Checklist
  - [ ] All features work as described
  - [ ] Backend server runs without errors
  - [ ] React connects to backend successfully
  - [ ] Can create new items
  - [ ] Can read/display items
  - [ ] Can update items
  - [ ] Can delete items
  - [ ] Handles empty lists
  
  ### Testing Checklist
  - [ ] Tested with valid input
  - [ ] Tested with empty input
  - [ ] Tested with special characters
  - [ ] Tested error scenarios
  - [ ] Tested with multiple items
  - [ ] No console errors or warnings
  
  ### Documentation Checklist
  - [ ] Explained what each component does
  - [ ] Explained how components communicate
  - [ ] Explained API endpoints
  - [ ] Showed sample requests/responses
  - [ ] Added setup instructions (npm install, npm start)
  
  ---
  
  ## Part 10: Quick Reference - Common Patterns
  
  ### React Hook Pattern
  \`\`\`javascript
  // STEP 1: Import
  import { useState, useEffect } from 'react';
  
  // STEP 2: Use state
  const [variableName, setVariableName] = useState(initialValue);
  
  // STEP 3: Use effect (run once on load)
  useEffect(() => {
    fetchData();
  }, []); // Empty array = run once
  
  // STEP 4: Use effect (run when dependency changes)
  useEffect(() => {
    doSomething();
  }, [dependency]); // Run when dependency changes
  \`\`\`
  
  ### Fetching Data Pattern
  \`\`\`javascript
  const fetchData = async () => {
    try {
      // STEP 1: Make request
      const response = await fetch(url);
      
      // STEP 2: Check if successful
      if (!response.ok) throw new Error('Failed');
      
      // STEP 3: Parse JSON
      const data = await response.json();
      
      // STEP 4: Use data
      setData(data);
      
    } catch (error) {
      // STEP 5: Handle error
      setError(error.message);
    }
  };
  \`\`\`
  
  ### Event Handling Pattern
  \`\`\`javascript
  // Event from user action
  const handleClick = (event) => {
    // Get data from event if needed
    const value = event.target.value;
    
    // Update state
    setState(value);
    
    // Call callback to parent
    onParentFunction(value);
  };
  \`\`\`
  
  ### Array Manipulation Pattern
  \`\`\`javascript
  // Add to array
  const newArray = [...oldArray, newItem];
  
  // Remove from array
  const newArray = oldArray.filter(item => item.id !== idToRemove);
  
  // Update in array
  const newArray = oldArray.map(item => 
    item.id === idToUpdate ? { ...item, ...updatedData } : item
  );
  
  // Find in array
  const item = oldArray.find(item => item.id === idToFind);
  \`\`\`
  
  ---
  
  ## How to Use This Master Prompt
  
  ### During the Exam:
  
  1. **Read the problem** → Use Part 2 framework
  2. **Plan the structure** → Decide React vs Node, what data flows
  3. **Write code** → Follow Part 3 best practices
  4. **Add comments** → Explain your thinking (Part 3)
  5. **Test functionality** → Check all features work
  6. **Explain your solution** → Use Part 7 template
  7. **Submit** → Use Part 9 checklist
  
  ### Key Principles:
  
  ✓ **Simple is Better** - Use simple variable names and functions
  ✓ **One Task Per Function** - Don't mix logic
  ✓ **Comment Your Thinking** - Show you understand concepts
  ✓ **Handle Errors** - Validate inputs, catch failures
  ✓ **Test Before Submitting** - Make sure it works
  ✓ **Explain Clearly** - Prove you understand your code
  
  ---
  
  ## Tips for Success
  
  1. **Take Your Time Reading** - The problem statement has all information
  2. **Write Pseudocode First** - Plan before coding
  3. **Build Incrementally** - Small features working > big features broken
  4. **Use Console.log** - Debug as you develop
  5. **Test Edge Cases** - Empty input, null values, errors
  6. **Explain as You Go** - Comments show your thinking
  7. **Keep Code Clean** - Formatting matters to recruiters
  8. **Ask Questions** - If unclear, it's okay to ask
  
  ---
  
  ## Final Checklist Before Submitting
  
  \`\`\`
  READ: Problem completely and understand requirements  ✓
  PLAN: Architecture and data flow                      ✓
  CODE: Write clean, commented code                     ✓
  TEST: All features work correctly                     ✓
  EXPLAIN: Your solution in simple terms                ✓
  REVIEW: Checklist in Part 9                           ✓
  SUBMIT: When confident                               ✓
  \`\`\`
  
  ---
  
  Good luck with your assessment! You've got this! 🚀`,
  
    // ── Structured Sections (shown in modal detail view) ───────────────────────
    whatItDoes: [
      'Provides a complete step‑by‑step framework for solving full‑stack HackerRank problems with React and Node — from pre‑test reading strategies to code writing best practices and explanation templates.',
      'Includes multiple code templates (React components, Express routes, API integration) and a detailed example of a full‑stack TODO app, plus a checklist to verify code quality, functionality, and documentation.',
      'Offers a reusable explanation format to prove your understanding, edge‑case handling, and reasoning behind design decisions — essential for technical interviews and assessments.',
    ],
  
    tips: [
      'Read the problem statement three times – first for overview, second for details, third for edge cases – before writing any code.',
      'Use the provided component templates as a starting point, but always adapt them to the specific requirements of the problem.',
      'When explaining your solution, follow the template in Part 7 – it shows the interviewer that you think like an engineer, not just a coder.',
      'Keep the backend simple: use in‑memory storage for the assessment unless explicitly asked for a database, and always validate incoming data.',
      'Test your application manually with both valid and invalid inputs, and use console.log to debug while building.',
    ],
  
    howToUse: [
      'Copy the entire prompt text from the "prompt" field above into your AI tool of choice (ChatGPT, Claude, Gemini, etc.).',
      'Then paste the specific HackerRank problem you need to solve, including any example inputs/outputs and constraints.',
      'The AI will guide you through the problem‑solving framework, write clean code with proper comments, and provide a full explanation of the solution.',
      'Review the generated code, test it locally if possible, and use the checklist in Part 9 to ensure everything is complete before submission.',
      'Optionally, ask the AI to expand any section (e.g., "Provide more detail on error handling" or "Add validation for email inputs") for further refinement.',
    ],
  };
  
  export default templatePrompt;