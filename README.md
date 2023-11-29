# First-Come-First-Serve (FCFS) Scheduling Algorithm

This repository contains a TypeScript implementation of the FCFS scheduling algorithm. FCFS is a simple scheduling algorithm that executes tasks in the order they arrive. This README provides an overview of the algorithm, details about the implementation, and instructions on how to run it using Node.js.

## FCFS Algorithm

The FCFS (First-Come-First-Serve) scheduling algorithm is a non-preemptive scheduling strategy where the process that arrives first is the first to be executed. In this algorithm, tasks are executed in the order of their arrival time, without considering their total execution time or priority.

## Implementation

The TypeScript implementation consists of three classes: `Task`, `Scheduler`, and a utility function `setRandomValues`. Here's a brief description of each:

- **Task Class**: Represents a task with a name, arrival time, and execution time.

- **Scheduler Class**: Implements the FCFS algorithm. Tasks are sorted based on their arrival time, and then executed in order.

- **setRandomValues Function**: Utility function to generate random start and end values for tasks with random priorities.

## How to Run

To run the FCFS implementation using Node.js, follow these steps:

1. Ensure you have Node.js installed on your machine.

2. Clone this repository:
   ```bash
   git clone https://github.com/misaellopes01/fcfs_scheduler_simulator.git
   ```

3. Navigate to the project directory:
   ```bash
   cd fcfs_scheduler_simulator
   ```

4. Install Bun (https://bun.sh/) on your system or Node.js(https://nodejs.org/):

  // for Node.js you must instal tsx or ts-node-dev to run TypeScript on Node.js
  ```bash
   npm install
   ```

5. Run the script:
  // With Bun, you simple run: 
  ```bash
   bun run src/main.ts
   ```
  // With Node.js, you can run:
   ```bash
   npm run dev
   ```

The script will output the execution details of tasks with user-defined priorities and tasks with random priorities.

Feel free, you can fork, test and add more functionality to suit your specific requirements or contribute for this project.

Happy coding!