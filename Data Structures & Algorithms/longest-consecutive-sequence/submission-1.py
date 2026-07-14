class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = sorted(nums)
        maxNum = 0
        maxAdds = 0
        adds = 0
        currentNum = 0
        for index,num in enumerate(nums):
            if index == 0:
                currentNum = num
                maxNum = num
                continue
            if num == currentNum + adds:
                continue
            if num == (currentNum + adds + 1):
                adds = adds+1
            else:
                if adds>maxAdds:
                    maxNum=currentNum
                    maxAdds=adds
                currentNum=num
                adds = 0
        if adds>maxAdds:
            maxNum=currentNum
            maxAdds=adds

        if len(nums) == 0:
            return 0
        return maxAdds + 1



            
            