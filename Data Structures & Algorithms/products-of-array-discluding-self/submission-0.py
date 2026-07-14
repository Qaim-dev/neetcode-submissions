class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        finalOutput = []
        for index,num in enumerate(nums):
            if index == 0:
                finalOutput.append(1)
            else:
                finalOutput.append(finalOutput[index - 1]*nums[index-1])
        
        post = nums[len(nums) - 1]

        for index in range(len(nums) - 2, -1 , -1):
            finalOutput[index] = finalOutput[index]*post
            post = post*nums[index]
        return finalOutput
        