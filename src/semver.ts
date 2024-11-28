// function that takes in semver string and increments it by 1
// note only the first version in that string can be more than 1 digit
// any versions that are input with an invalid number of digits will be corrected
// input must only contain digits [0-9] and periods [.], assignment states test inputs will be valid
// eg 1.24.2 will be corrected to -> 1.2.4.3

export function nextVersion(version: string): string {
  // creates an array of strings representing the version numbers without periods
  const versionArray = version.split(".");

  // length of first number in the version
  const majorVersionLength = versionArray[0].length;

  // removes periods from string
  const versionNoDots = versionArray.join("");

  // length of version, not including periods
  const versionNoDotsLength = versionNoDots.length;

  // converts string version to an int
  const intVersion = parseInt(versionNoDots);

  // increments the version by 1
  const incrementedVersion = intVersion + 1;

  // convert incremented version to string
  const incrementedVersionString = incrementedVersion.toString();

  // the number of digits we want to slice from the beggining of the string
  // this is to ensure compatibility with versions beggining with more than one digit
  const numberOfDigitsToSlice =
    majorVersionLength + incrementedVersionString.length - versionNoDotsLength;

  // first x digits of the string
  const startingDigits = incrementedVersionString.slice(
    0,
    numberOfDigitsToSlice
  );

  // remaining digits of the string
  const remainingDigits = incrementedVersionString.slice(numberOfDigitsToSlice);

  // handle case where version contains a single digit
  const versionDelimeter = versionArray.length > 1 ? "." : "";
  const startVersionString = startingDigits + versionDelimeter;

  // combine start of the version with the remaining digits
  const finalIncrementedVersion =
    startVersionString + remainingDigits.split("").join(".");

  return finalIncrementedVersion;
}
