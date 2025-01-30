from typing import List
from collections import deque

# 4- 1337. The K Weakest Rows in a Matrix


class Solution:
    # def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
    #   obj: dict[int, list] = dict()

    #   for index, item in enumerate(mat):
    #     soldiersCount = item.count(1)
    #     if soldiersCount in obj:
    #       obj[soldiersCount].append(index)
    #     else:
    #       obj[soldiersCount]= [index]

    #   weakest = list(obj.keys())
    #   weakest.sort()
    #   result = []

    #   for item in weakest:
    #     if k==0: break
    #     result += obj[item][0:k]
    #     k -= len(obj[item][0:k])

    #   return result

    # Another answer
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        tmp = []
        for index, item in enumerate(mat):
            cand = (item.count(1), index)
            tmp.append(cand)

        tmp.sort()
        return [item[1] for item in tmp[:k]]


# obj = Solution()

# mat =[
#   [1,1,0,0,0],
#   [1,1,1,1,0],
#   [1,0,0,0,0],
#   [1,1,0,0,0],
#   [1,1,1,1,1]
# ]

# print(obj.kWeakestRows(mat, 3))

# mat = [
#   [0,0],
#   [0,0],
#   [1,1],
#   [1,1]
# ]
# print(obj.kWeakestRows(mat, 1))

# ------------------------------------------------------
# 1464. Maximum Product of Two Elements in an Array

# class Solution:
#     def maxProduct(self, nums: List[int]) -> int:
#       nums.sort(reverse=1)
#       return (nums[0]-1)*(nums[1]-1)


# obj = Solution()

# print(obj.maxProduct([1, 5, 3, 5]))

# ------------------------------------------------------
# 2099. Find Subsequence of Length K With the Largest Sum

class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        tmp = [(item, index) for index, item in enumerate(nums)]
        tmp.sort(reverse=1)
        targets = tmp[:k]
        targets = sorted(targets, key=lambda x: x[1])
        return [item[0] for item in targets]

# obj = Solution()
# print(obj.maxSubsequence([-1,-2,4,3], 3))
# print(obj.maxSubsequence([2,1,3,3], 2))
# print(obj.maxSubsequence([3,4,3,3], 2))

# ------------------------------------------------------

# 7- 2231. Largest Number After Digit Swaps by Parity


class Solution:
    def largestInteger(self, num: int) -> int:
        digits = [int(d) for d in str(num)]

        even_digits = sorted([d for d in digits if d % 2 == 0], reverse=True)
        odd_digits = sorted([d for d in digits if d % 2 == 1], reverse=True)

        result = []
        for d in digits:
            if d % 2 == 0:
                result.append(even_digits.pop(0))
            else:
                result.append(odd_digits.pop(0))

        return int("".join(str(item) for item in result))


# obj = Solution()

# # print(obj.largestInteger(65875))
# print(obj.largestInteger(1234))
# print(obj.largestInteger(247))


# ------------------------------------------------------
# 8- 2357. Make Array Zero by Subtracting Equal Amounts

class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        numberOfIter = 0
        nums = [num for num in nums if num != 0]

        while nums:
            minNum = min(nums)
            nums = list(filter(lambda item: item != 0,
                        [num-minNum for num in nums]))
            numberOfIter += 1

        return numberOfIter

    # Another Answer
    def minimumOperations(self, A):
        return len(set(A) - {0})


# obj = Solution()

# print(obj.minimumOperations([1, 5, 0, 3, 5]))


# ------------------------------------------------------
# 9- 2335. Minimum Amount of Time to Fill Cups

class Solution:
  # GPT
    def fillCups(self, amount: List[int]) -> int:
        leastSecond = 0

        while any(item > 0 for item in amount):  # طالما هناك كمية أكبر من صفر
            amount.sort(reverse=True)  # ترتيب القيم من الأكبر إلى الأصغر
            if amount[0] > 0:  # إذا كان العنصر الأكبر > 0
                amount[0] -= 1
            if amount[1] > 0:  # إذا كان العنصر الثاني > 0
                amount[1] -= 1
            leastSecond += 1  # استهلكنا ثانية واحدة

        return leastSecond


obj = Solution()

# print(obj.fillCups([1,4,2]))
# print(obj.fillCups([0, 0]))
# print(obj.fillCups([5, 4, 4]))


# ---------------------------------
# 10- 2500. Delete Greatest Value in Each Row

class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        result = 0
        i=0
        great=[]
        while True:
            if all(item == [] for item in grid) : break
            maxItem = max(grid[i])
            great.append(maxItem)
            grid[i].remove(maxItem)
            i = (i+1) % len(grid)
            if i % len(grid) == 0 and great:
                result += max(great)
                great = []

        if great:
            result += max(great)
        return result
        
    

obj = Solution()
# print(obj.deleteGreatestValue([[1,2,4],[3,3,1]]))
# print(obj.deleteGreatestValue([[10, 5, 3], [9, 10], [5, 11]]))


# -------------------------------
# 11- 2558. Take Gifts From the Richest Pile

import math, heapq

class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        for _ in range(k):
            gifts.sort()
            updateValue = int(math.sqrt(gifts[-1])) 
            gifts[-1] = updateValue
        
        return sum(gifts)
    


obj = Solution()
# print(obj.pickGifts([25,64,9,4,100], 4))
# print(obj.pickGifts([1,1,1,1], 4))

