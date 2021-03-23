function searchInsert(nums: number[], target: number): number {
    if(nums.length == 1 && nums[0] == target) return 0;
    if(target>nums[nums.length-1]) return nums.length;
    (nums.length == 1 && nums[0] > target)?0:1;
    for( let i = 0; i<nums.length; i++){
        if(target==nums[i]) return i;
        if(target<nums[i]) return i;
    }
};