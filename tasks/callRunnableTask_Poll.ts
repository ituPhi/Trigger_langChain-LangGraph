import { tasks } from "@trigger.dev/sdk/v3";

const payload: string = "Sharks";

async function calltask(payload: string) {
  //console.log(payload);
  const handle = await tasks.triggerAndPoll("runnableSequence_task", {
    payload,
  }); // wait for the task to finish using the helper function
  return handle.output; // return only the output
}
const run = await calltask(payload);
console.log(run);
