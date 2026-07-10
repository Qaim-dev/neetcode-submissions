class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        numByIndexes = {}        
        for i,n in enumerate(nums):
            left = target - n
            if (left in numByIndexes and numByIndexes[left] != i):
                return [numByIndexes[left],i]
            numByIndexes[n] = i

