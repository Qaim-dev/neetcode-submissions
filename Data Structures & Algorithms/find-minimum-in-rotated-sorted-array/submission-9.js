class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1;

        //handle complete rotations

        if (nums[l] <= nums[r])
        {
            return nums[l];
        }

        while (l <= r)
        {
            const mid = Math.floor((l + r)/2);
            const midVal = nums[mid];
            const next = mid + 1 < nums.length ? mid+1 : 0;
            const prev = mid - 1 >= 0 ? mid - 1 : nums.length - 1;



            if (nums[prev] > midVal && nums[next] > midVal)
            {
                return midVal;
            }
    
            else if (midVal > nums[r])
            {
                l = mid + 1;
                continue;
            }
            else if (midVal < nums[r])
            {
                r = mid - 1;
                continue
            }

        }




    }
}
