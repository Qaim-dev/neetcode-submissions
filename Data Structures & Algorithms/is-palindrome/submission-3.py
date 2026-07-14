class Solution:
    def isPalindrome(self, s: str) -> bool:

        s = "".join(c.lower() for c in s if c.isalnum())
        front = 0 
        back = len(s) - 1
        while front < back:
            print("front",front)
            print("back",back)
            if s[front] != s[back]:
                return False
            front = front + 1
            back = back - 1
        return True
        