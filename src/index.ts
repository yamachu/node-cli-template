import { argv, argv0, env } from "node:process";
import { setTimeout } from "node:timers/promises";
import { parseArgs } from "node:util";

console.log(`Hello, ${env["MY_ENV_VAR"]}`);

const parsed = parseArgs({
  options: {
    port: {
      type: "string",
      short: "p",
      default: "8080".toString(),
      description: "Some port number",
    },
    verbose: {
      type: "boolean",
      short: "v",
      default: false,
      description: "Enable verbose logging",
    },
  },
  allowPositionals: true,
});

if (parsed.positionals.length !== 1) {
  console.error(`Usage: ${argv0} ${argv[1]} <some positional argument>`);
  process.exit(1);
}

console.log(`Positional argument: ${parsed.positionals[0]}`);
console.log(`Port: ${parsed.values.port}`);
console.log(`Verbose: ${parsed.values.verbose}`);
console.log(`All arguments: ${JSON.stringify(parsed.values, null, 2)}`);

console.log("Wait 1sec");
const waited = await setTimeout(1000, "hello world");
console.log(waited);
