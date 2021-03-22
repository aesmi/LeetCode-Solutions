function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map();
   for (let i = 0; i < nums.length; i++) {
     const diff = target - nums[i]
     if(numsMap.has(diff)) {
       return [numsMap.get(diff), i];
       // get() returns a specified element associated with the specified key from the Map object.
     } else {
       numsMap.set(nums[i], i);
       //  set() adds or updates an element with a specified key and value to a Map object.
     }
   }
 }
 