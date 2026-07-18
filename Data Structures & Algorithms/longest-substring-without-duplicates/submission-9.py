class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charIndexes = {}
        start = 0 
        end = 0
        maxL = 0
        while end < len(s):
            currentChar = s[end]
            if currentChar in charIndexes and charIndexes[currentChar] >= start:
                start = charIndexes[currentChar] + 1
            charIndexes[currentChar] = end
            end+=1
            maxL = max(maxL, end - start)
        return maxL









        