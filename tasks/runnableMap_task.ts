import { task } from "@trigger.dev/sdk/v3";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableMap } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";

// Parallel Processing In LangChain
// The `RunnableMap` example demonstrates concurrent execution of independent operations by LangChain:
// 1. Generate joke about topic
// 2. Generate poem about topic
// 3. Return both results simultaneously inside the same trigger task

export const runnableMap_task = task({
  id: "runnableMap_task",
  maxDuration: 300,
  retry: {
    maxAttempts: 3,
    factor: 1.8,
  },
  run: async (payload) => {
    const model = new ChatOpenAI({
      apiKey: process.env.OPENAI_KEY,
    });
    const jokeChain = PromptTemplate.fromTemplate(
      "Tell me a joke about {topic}",
    ).pipe(model);
    const poemChain = PromptTemplate.fromTemplate(
      "write a 2-line poem about {topic}",
    ).pipe(model);

    const mapChain = RunnableMap.from({
      joke: jokeChain,
      poem: poemChain,
    });

    const result = await mapChain.invoke({ topic: payload });
    return result;
  },
});
