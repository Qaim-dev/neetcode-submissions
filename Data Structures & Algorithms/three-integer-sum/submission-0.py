class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        
        numMap = {}
        finalOutput = []
        for num in nums:
            numMap[num] = numMap.get(num,0) + 1

        for i,first in enumerate(nums):
            if i == len(nums)-1:
                break

            numMap[first] -= 1

            for j in range(i+1,len(nums),1):
                second = nums[j]
                numMap[second] -=1
                need = 0 - first - second

                if need in numMap and numMap[need]:

                    toAdd = sorted([first,second,need])
                    if toAdd not in finalOutput:
                        finalOutput.append(toAdd)
                
                numMap[second] += 1


            numMap[first] += 1

        return finalOutput