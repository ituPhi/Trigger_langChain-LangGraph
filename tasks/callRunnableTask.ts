import { tasks, runs } from "@trigger.dev/sdk/v3";

const payload: string = "Sharks";

async function calltask(payload: string) {
  //console.log(payload);
  const handle = await tasks.trigger("runnableSequence_task", {
    payload,
  });

  return Response.json(handle);
}
const run = await calltask(payload);
console.log(run);
