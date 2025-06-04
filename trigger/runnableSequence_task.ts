import { logger, task } from "@trigger.dev/sdk/v3";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";

export const runnableSequence_task = task({
  id: "runnableSequence_task",
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  onStart: async () => logger.log("starting runnable sequence"),
  run: async (payload: any, { ctx }) => {
    const llm = new ChatOpenAI({
      apiKey: process.env.OPENAI_KEY,
    });
    // prompt template accept a topic as input, this will come from our payload
    const prompt = ChatPromptTemplate.fromTemplate(
      "tell me a joke about {topic}",
    );
    const chain = RunnableSequence.from([
      prompt,
      llm,
      new StringOutputParser(), // parse response as string
    ]);
    const chainResponse = await chain.invoke({ topic: payload });
    logger.log("Running Runnable Sequence", { payload, ctx });
    return {
      message: chainResponse,
    };
  },
  cleanup: async () => logger.log("Finished"),
});
