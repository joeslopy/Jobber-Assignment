import { nextVersion } from "./semver";
import prompt from "prompt";

prompt.start();

var schema = {
  properties: {
    version: {
      pattern: /^\d(\d|\.\d+)*$/,
      message:
        "Version contain only numbers or periods, start and end with a number",
      required: true,
    },
  },
};

console.log("Please input semantic version you would like to increment");

// output the incremented semver

prompt.get(schema, function (err, { version }) {
  if (typeof version != "string") {
    console.log("Oops something went wrong");
    return;
  }
  console.log("Incremented version: ", nextVersion(version));
});
