# Trigger.dev with LangChain Examples

This repository showcases examples and experiments using Trigger.dev with LangChain, demonstrating various patterns for building AI-powered background tasks.

## Overview

The examples in this repository demonstrate how to integrate LangChain's powerful AI capabilities with Trigger.dev's robust task execution platform. You'll find implementations of common LangChain patterns including sequential chains, parallel execution, and different output parsing strategies.

## Prerequisites

- Node.js (v18 or higher)
- OpenAI API key
- Trigger.dev account and project

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```bash
OPENAI_KEY=your_openai_api_key_here
TRIGGER_PROJECT_ID=your_trigger_project_id
TRIGGER_SECRET_KEY=your_trigger_secret_key
```

### 3. Start Trigger.dev Development Server

```bash
npx trigger.dev@latest dev
```

This will start the local development server and connect to your Trigger.dev project.

## Running the Examples

### Method 1: Trigger.dev Dashboard

1. Navigate to your Trigger.dev project dashboard
2. Find the tasks: `runnableSequence_task` or `runnableMap_task`
3. Click "Test" and provide a topic as payload (e.g., "sharks")
4. Monitor execution in real-time

### Method 2: Local Trigger Scripts

Run the trigger scripts directly using tsx:

#### Sequential Chain Example
```bash
npx tsx --env-file=.env ./triggers/callRunnableTask.ts
```

## File Structure

```
trigger-n-langs/
├── tasks/
│   ├── runnableSequence_task.ts    # Sequential chain execution
│   └── runnableMap_task.ts         # Parallel chain execution
├── triggers/
│   ├── callRunnableTask.ts         # Basic task trigger
│   ├── callRunnableTask_Poll.ts    # Task trigger with polling
│   └── callRunnableMapTask.ts      # Map task trigger
└── README.md
```

## Resources

- [Trigger.dev Documentation](https://trigger.dev/docs)
- [LangChain JavaScript Documentation](https://js.langchain.com/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
