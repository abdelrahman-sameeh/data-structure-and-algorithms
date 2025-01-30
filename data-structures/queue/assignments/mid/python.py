import math
import sys
from collections import deque
from typing import List

# ***********************************************************
# 1- 622. Design Circular Queue


class MyCircularQueue(object):

    def __init__(self, k):
        """
        :type k: int
        """
        self.queue = []
        self.length = k
        self.frontIdx = 0
        self.rearIdx = 0

    def enQueue(self, value):
        """
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False

        self.rearIdx = (
            self.rearIdx+1) % self.length if len(self.queue) > 0 else 0

        if len(self.queue) == self.length and self.queue.count(None) > 0:
            i = 0
            while self.queue[i] != None:
                i += 1
            self.queue[i] = value
            return True
        elif len(self.queue) < self.length:
            self.queue.append(value)
            return True

    def deQueue(self):
        """
        :rtype: bool
        """
        if self.isEmpty():
            return False

        self.queue[self.frontIdx] = None
        self.frontIdx = (self.frontIdx + 1) % self.length

        # reset queue if all elements is None
        if self.isEmpty():
            self.queue = []
            self.frontIdx = 0
            self.rearIdx = 0

        return True

    def Front(self):
        """
        :rtype: int
        """
        if self.isEmpty():
            return -1
        return self.queue[self.frontIdx]

    def Rear(self):
        """
        :rtype: int
        """
        if self.isEmpty():
            return -1
        print(self.queue)
        return self.queue[self.rearIdx]

    def isEmpty(self):
        """
        :rtype: bool
        """
        return len(self.queue) == 0 or all(item is None for item in self.queue)

    def isFull(self):
        """
        :rtype: bool
        """
        return len(self.queue) == self.length and all(item is not None for item in self.queue)


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(2)
# print(obj.enQueue(1))
# print(obj.enQueue(2))
# print(obj.deQueue())
# print(obj.enQueue(3))
# print(obj.deQueue())
# print(obj.enQueue(4))
# print(obj.deQueue())
# print(obj.enQueue(3))
# print(obj.deQueue())
# print(obj.deQueue())
# print(obj.Front())
# print(obj.Rear())
# print(obj.enQueue(1))
# print(obj.Rear())
# print(obj.Front())
# print(obj.deQueue())
# print(obj.isEmpty())
# print(obj.isFull())
# print("front", obj.Front())
# print("rear", obj.Rear())
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()


# ***********************************************************
# 2- 641. Design Circular Deque

class MyCircularDeque(object):

    def __init__(self, k):
        """
        :type k: int
        """
        self.queue = []
        self.maxLength = k
        self.front = 0
        self.rear = 0

    def insertFront(self, value):
        """
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False

        if self.isEmpty():
            self.queue.append(value)
        else:
            self.queue = [value]+self.queue

        self.rear = len(self.queue)-1
        return True

    def insertLast(self, value):
        """
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False

        self.queue.append(value)
        self.rear = len(self.queue)-1
        return True

    def deleteFront(self):
        """
        :rtype: bool
        """
        if self.isEmpty():
            return False

        self.queue = self.queue[1:]
        return True

    def deleteLast(self):
        """
        :rtype: bool
        """
        if self.isEmpty():
            return False

        self.queue.pop()
        self.rear = len(self.queue)-1
        return True

    def getFront(self):
        """
        :rtype: int
        """
        if self.isEmpty():
            return False
        return self.queue[0]

    def getRear(self):
        """
        :rtype: int
        """
        if self.isEmpty():
            return False
        return self.queue[-1]

    def isEmpty(self):
        """
        :rtype: bool
        """
        return self.queue == []

    def isFull(self):
        """
        :rtype: bool
        """
        return len(self.queue) == self.maxLength

    def printQueue(self):
        print(self.queue)

# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(3)
# print(obj.insertLast(1))
# print(obj.insertLast(2))
# print(obj.insertFront(3))

# obj.printQueue()
# print(obj.getRear())
# print(obj.isFull())
# print(obj.deleteLast())
# obj.printQueue()
# print(obj.insertFront(4))
# obj.printQueue()


# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()


# ***********************************************************
# 3- 649. Dota2 Senate


class Solution(object):
    def predictPartyVictory(self, senate):
        """
        :type senate: str
        :rtype: str
        """
        R, D = deque(), deque()

        for i, char in enumerate(senate):
            if char == "R":
                R.append(i)
            else:
                D.append(i)

        while R and D:
            r = R.popleft()
            d = D.popleft()

            if r < d:
                R.append(r+len(senate))
            else:
                D.append(r+len(senate))

        return "Radiant" if R else "Dire"


# obj = Solution()
# print(obj.predictPartyVictory("RDDDR"))
# print(obj.predictPartyVictory("DDD"))
# print(obj.predictPartyVictory("RRRDDDR"))
# print(obj.predictPartyVictory("RD"))
# print(obj.predictPartyVictory("DR"))
# print(obj.predictPartyVictory("DDRRR"))

# ***********************************************************
# 950. Reveal Cards In Increasing Order

class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort(reverse=True)
        queue = []

        for item in deck:
            if len(queue) > 1:
                last_item = queue.pop()
                queue[:] = [last_item] + queue
            queue[:] = [item] + queue

        return queue


# gpt solution
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort()
        result = deque()
        for card in reversed(deck):
            if result:
                result.appendleft(result.pop())
            result.appendleft(card)
        return list(result)


# obj = Solution()

# print(obj.deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]))

# ***********************************************************
# 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit


class Solution:
    # def longestSubarray(self, nums: List[int], limit: int) -> int:
    #     global_max = curr_max = p1 = p2 = 0

    #     while p1 < len(nums):
    #         if p2==len(nums):
    #             p1 += 1
    #             p2 = p1
    #             global_max = max(global_max, curr_max)
    #             curr_max = 0
    #             continue

    #         if abs(nums[p1] - nums[p2]) <= limit:
    #             curr_max += 1
    #             p2 += 1
    #         else:
    #             p1 += 1
    #             p2 = p1
    #             global_max = max(global_max, curr_max)
    #             curr_max = 0

    #         print(p1, p2, curr_max, global_max)

    #     return global_max

    # GPT Solution
    def longestSubarray(self, nums, limit):

        # Initialize variables
        left = 0
        max_len = 0
        max_deque = []  # For tracking max values
        min_deque = []  # For tracking min values

        # Iterate through the array
        for right in range(len(nums)):
            current = nums[right]

            # Update max_deque
            while max_deque and nums[max_deque[-1]] < current:
                max_deque.pop()
            max_deque.append(right)

            # Update min_deque
            while min_deque and nums[min_deque[-1]] > current:
                min_deque.pop()
            min_deque.append(right)

            # Trace: Print the current window
            print(f"Step {right + 1}:")
            print(f"  Right pointer = {right}, Current number = {current}")
            print(f"  Current window = {nums[left:right+1]}")
            print(f"  Max deque values = {[nums[i] for i in max_deque]}")
            print(f"  Min deque values = {[nums[i] for i in min_deque]}")
            print(
                f"  Max in window = {nums[max_deque[0]]}, Min in window = {nums[min_deque[0]]}")

            # Check if the current window is valid
            while nums[max_deque[0]] - nums[min_deque[0]] > limit:
                print(f"  Shrinking window as difference > {limit}")
                left += 1
                if max_deque[0] < left:
                    max_deque.pop(0)
                if min_deque[0] < left:
                    min_deque.pop(0)

            # Update max_len
            max_len = max(max_len, right - left + 1)
            print(f"  Updated max_len = {max_len}")
            print("-" * 50)

        # Result
        print("Maximum length of subarray:", max_len)


obj = Solution()
# print(obj.longestSubarray([8, 2, 4, 7], 4))
# print(obj.longestSubarray([10,1,2,4,7,2], 5))
# print(obj.longestSubarray([4,2,2,2,4,4,2,2], 0))
# print(obj.longestSubarray([1,5,6,7,8,10,6,5,6], 4))


# ***********************************************************
# 1670. Design Front Middle Back Queue

class FrontMiddleBackQueue:

    def __init__(self):
        self.queue = deque()

    def pushFront(self, val: int) -> None:
        self.queue.appendleft(val)

    def pushMiddle(self, val: int) -> None:
        middleIdx = len(self.queue) // 2
        self.queue.insert(middleIdx, val)

    def pushBack(self, val: int) -> None:
        self.queue.append(val)

    def popFront(self) -> int:
        return self.queue.popleft() if self.queue else -1

    def popMiddle(self) -> int:
        if not self.queue:
            return -1
        middleIdx = (len(self.queue) - 1) // 2
        item = self.queue[middleIdx]
        del self.queue[middleIdx]
        return item

    def popBack(self) -> int:
        return self.queue.pop() if self.queue else -1

    # def printq(self):
    #     print(self.queue)


# obj = FrontMiddleBackQueue()
# print(obj.pushFront(1))
# print(obj.pushFront(2))
# print(obj.pushFront(3))
# print(obj.pushFront(4))

# obj.printq()


# print(obj.popBack())
# print(obj.popBack())
# print(obj.popBack())
# print(obj.popBack())

# ***********************************************************
# 6- 1696. Jump Game VI

class Solution:
    # def maxResult(self, nums: List[int], k: int) -> int:
    #     max_item = -sys.maxsize - 1
    #     p1 = p2 = 0
    #     loop_to = min(len(nums)-1, k)
    #     max_sum = nums[0]
    #     index_to = 0

    #     while p2 < len(nums):
    #         if p2 == len(nums)- 1:
    #             max_sum += max_item
    #             break
    #         if p2 == loop_to:
    #             max_sum += max_item
    #             max_item = nums[index_to+1]
    #             p1 = index_to
    #             p2 = index_to+1
    #             loop_to = min(len(nums)-1, k+p1)
    #         else:
    #             p2 += 1
    #             last_max = max_item
    #             max_item = max(max_item, nums[p2])
    #             if last_max != max_item:
    #                 index_to = p2

    #     return max_sum

    def maxResult(self, nums, k):
        # Initialize deque to keep track of indices of max dp values
        dq = deque()
        # Initialize the dp array with the same length as nums
        dp = [0] * len(nums)
        # Base case: dp[0] is just nums[0]
        dp[0] = nums[0]
        dq.append(0)  # Start with the first index

        # Iterate through nums starting from the second element
        for i in range(1, len(nums)):
            # Remove indices from deque that are out of the sliding window
            while dq and dq[0] < i - k:
                dq.popleft()

            # The current dp[i] is nums[i] + the maximum score from the deque's front
            dp[i] = nums[i] + dp[dq[0]]

            # Maintain the deque in decreasing order of dp values
            while dq and dp[i] >= dp[dq[-1]]:
                dq.pop()

            # Add the current index to the deque
            dq.append(i)

            print(dq)
            print(dp)
            print("*"*10)

        # The result is the value at the last index of dp
        return dp[-1]


obj = Solution()
# print(obj.maxResult([1, -1, -2, 4, -7, 3], 2))
# print(obj.maxResult([10,-5,-2,4,0,3], 3))
# print(obj.maxResult([1,-5,-20,4,-1,3,-6,-3], 2))


# ***********************************************************
# 7- 1823. Find the Winner of the Circular Game

# class Solution:
#     def findTheWinner(self, n: int, k: int) -> int:
#         if n == 1:
#             return n
#         dq = list(range(1, n+1))
#         while len(dq) > 1:
#             target_idx = (k - 1) % len(dq)
#             del dq[target_idx]
#             dq = dq[target_idx:] + dq[:target_idx]
#         return dq


# obj = Solution()
# print(obj.findTheWinner(6, 5))





