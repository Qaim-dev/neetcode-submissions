class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set()
        currentMax = 0
        for num in nums:
            numSet.add(num)
        
        for num in nums:
            if num - 1 in numSet:
                continue
            count = 1
            end = num + 1
            while end in numSet:
                end = end + 1
                count = count + 1
            if currentMax < count:
                currentMax = count

        return currentMax
            
            
            