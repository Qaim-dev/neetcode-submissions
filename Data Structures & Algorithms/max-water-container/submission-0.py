class Solution:
    def maxArea(self, heights: List[int]) -> int:
        back = len(heights) - 1
        front = 0
        maxVol = 0

        while front < back:
            vol = min(heights[front],heights[back])*(back - front)
            if vol > maxVol:
                maxVol = vol
            
            if (heights[front] > heights[back]):
                back-=1
            else:
                front+=1
        return maxVol