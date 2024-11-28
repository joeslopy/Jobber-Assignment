import { nextVersion } from "../src/semver";

// nextVersion("1.2.3") === "1.2.4";
//  nextVersion("0.9.9") === "1.0.0";
//  nextVersion("1") === "2";
//  nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
//  nextVersion("9.9") === “10.0";

interface TestData {
  input: string;
  expectedOutput: string;
}

const testData: TestData[] = [
  // test cases from the problem statement
  { input: "1.2.3", expectedOutput: "1.2.4" },
  { input: "0.9.9", expectedOutput: "1.0.0" },
  { input: "1", expectedOutput: "2" },
  { input: "1.2.3.4.5.6.7.8", expectedOutput: "1.2.3.4.5.6.7.9" },
  { input: "9.9", expectedOutput: "10.0" },

  //additional test cases i've added
  { input: "19.9.9.9", expectedOutput: "20.0.0.0" },
  { input: "582.9.9.9.8", expectedOutput: "582.9.9.9.9" },
  { input: "582.9.9.9.9", expectedOutput: "583.0.0.0.0" },
  { input: "99", expectedOutput: "100" },
  {
    input:
      "10.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9.9",
    expectedOutput:
      "11.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0",
  },
];

describe("Testing nextVersion", () => {
  testData.forEach((testData: TestData, index) => {
    test(`Test number ${index + 1}`, () => {
      expect(nextVersion(testData.input)).toEqual(testData.expectedOutput);
    });
  });
});
