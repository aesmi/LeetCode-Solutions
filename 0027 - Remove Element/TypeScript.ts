function removeElement(nums: number[], val: number): number {
    if(nums.length == 0) return nums.length;
    if(nums.indexOf(val) < 0) return nums.length;
    let j:number = 0;
    for(let i: number = 0; i < nums.length; i++){
        if( nums[i] != val){
            nums[j++]=nums[i];
        }
    }  
    return j;
};