import { tasks } from "@trigger.dev/sdk/v3";

const payload: string = "sharks";

async function callTask(payload: string) {
  //execute two chains, one for poem, one for joke, in parallel inside a single task
  const handle = await tasks.trigger("runnableMap_task", {
    payload,
  });
  return Response.json(handle);
}
const run = await callTask(payload);
console.log(run);
