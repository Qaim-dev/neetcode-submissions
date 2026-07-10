class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        numByIndexes = {}
        for i in range(len(nums)):
            numByIndexes[nums[i]] = i

        
        for i,n in enumerate(nums):
            left = target - n
            print(i,left)
            print(numByIndexes)
            if (left in numByIndexes and numByIndexes[left] != i):
                return [i,numByIndexes[left]]

