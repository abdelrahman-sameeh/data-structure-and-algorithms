from typing import List

# *****************************************************
# 1- 215. Kth Largest Element in an Array 


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums.sort(reverse=True)
        return nums[k-1]

# obj = Solution()
# print(obj.findKthLargest([3,2,3,1,2,4,5,5,6], k = 4))
# print(obj.findKthLargest([3,2,1,5,6,4], k = 2))

# *****************************************************
# 2- 264. Ugly Number II

import sys

class Solution:
    def prime_factors(self, n):
        i = 2
        factors = []
        while i * i <= n:
            if n % i:
                i += 1
            else:
                n //= i
                factors.append(i)
        if n > 1:
            factors.append(n)
        return factors
        

    def nthUglyNumber(self, n: int) -> int:
        if n==1:
            return 1
        nums = [1]
        for i in range(2, sys.maxsize):
            if len(nums) == n: break
            if int(self.prime_factors(i)[-1]) in [2, 3, 5]:
                nums.append(i)
        print(nums)
        return nums[-1]



obj = Solution()
# print(obj.nthUglyNumber(10))
# print(obj.nthUglyNumber(1))
# print(obj.nthUglyNumber(450))



# *****************************************************
# 3- 347. Top K Frequent Elements


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dic = {}
        for item in nums:
            if item in dic:
                dic[item] = dic[item]+1
            else:
                dic[item] = 1
        
        thisList = list([dic[item], item] for item in dic)
        thisList = sorted(thisList, reverse=True)
        
        return [item[1] for item in thisList[:k]]


obj = Solution()
# print(obj.topKFrequent([1,1,1,2,2,3], 2))



# *****************************************************
# 4- 355. Design Twitter


class Twitter:
    def __init__(self):
        self.tweets = []
        self.users = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId not in self.users:
          self.users[userId] = {
            "following": []
          }
        self.tweets.append((userId, tweetId))


    def getNewsFeed(self, userId: int) -> List[int]:
        if userId not in self.users:
          self.users[userId] = {
            "following": []
          }

        result = []
        followers = self.users.get(userId)["following"] + [userId]
        count = 10
        for idx in range(len(self.tweets)-1, -1, -1):
          if count==0: break
          
          if self.tweets[idx][0] in followers:
            result.append(self.tweets[idx][1])
            count -= 1
        return result 


    def follow(self, follower: int, followee: int) -> None:
        if follower==followee :return
        if follower not in self.users:
          self.users[follower] = {
            "following": []
          }
        if followee not in self.users:
          self.users[followee] = {
            "following": []
          }
        self.users[follower]["following"].append(followee)


    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId==followeeId :return
        if followerId not in self.users:
          self.users[followerId] = {
            "following": []
          }
        if followeeId not in self.users:
          self.users[followeeId] = {
            "following": []
          }
        for idx, item in enumerate(self.users[followerId]["following"]):
          if item == followeeId:
            self.users[followerId]["following"].pop(idx)
            break
        


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# print(obj.postTweet(1,5))
# print(obj.postTweet(1,6))
# print(obj.getNewsFeed(1))
# print(obj.postTweet(2,7))

# # obj.follow(1,2)
# print(obj.getNewsFeed(1))
# obj.unfollow(1,2)
# print(obj.getNewsFeed(1))

