class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        seen = set()

        nums = sorted(nums)
        for base in range(len(nums)):
            front = base + 1
            back = len(nums) - 1

            while front < back:
                if nums[base] + nums[front] + nums[back] == 0:
                    arr = tuple([nums[base],nums[front],nums[back]])
                    if arr not in seen:
                        seen.add(arr)
                    front +=1
                    back -=1
                elif nums[base] + nums[front] + nums[back] > 0:
                    back -=1
                else:
                    front +=1
        
        return [list(t) for t in seen]
                    

