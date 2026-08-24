class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l = 0 , r = nums.length - 1; 


        const isPartial = nums[l] > nums[r];
        const valAtEnd = nums.at(-1)

        while (l <= r)
        {

            const mid = Math.floor((l + r)/2);
            const midValue = nums[mid];
            const slopeImOn = midValue < valAtEnd ? "second" : "first";
            console.log({midValue,l,r})
            if (midValue == target) return mid;
            if (midValue > target)
            {
                if (isPartial) 
                {
                   if (slopeImOn == "second")
                   {
                        r = mid - 1;
                        continue;
                   }
                   else
                   {
                        if (target <= valAtEnd)
                        {
                            l = mid +1;
                            continue;
                        }
                        else
                        {
                            r = mid - 1;
                            continue;   
                        }
                   }
                }
                else 
                {
                    r = mid - 1;
                    continue;
                }
            }
            else
            {
                if (isPartial)
                {
                 if (slopeImOn == "first")
                   {
                        l = mid + 1;
                        continue;
                   }
                   else
                   {
                        if (target <= valAtEnd)
                        {
                            l = mid +1;
                            continue;
                        }
                        else
                        {
                            r = mid - 1;
                            continue;   
                        }
                   }
                }
                l = mid + 1;
                continue;
            }
          
        }
        return -1;




    }
}
