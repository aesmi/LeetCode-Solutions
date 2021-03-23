function longestCommonPrefix(strs: string[]): string {
  const strLength: number = strs.length;
  if (strLength === 0) return "";
  // sort our string array
  let A: string[] = strs.sort();
  let str1: string = A[0];
  let str2: string = A[strLength - 1];
  let i: number = 0;
  // find our shortest length
  let length: number = str1.length > str2.length ? str2.length : str1.length;
  // traverse both string chars based on shortest string length
  while (str1.charAt(i) === str2.charAt(i) && i < length) {
    i++;
  }

  // as long as length of each string isnt empty, return substring (prefix) else return empty string
  return i != 0 ? A[0].substr(0, i) : "";
}
