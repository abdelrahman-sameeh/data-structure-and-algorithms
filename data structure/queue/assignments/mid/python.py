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
obj = MyCircularDeque(3)
print(obj.insertLast(1))
print(obj.insertLast(2))
print(obj.insertFront(3))

obj.printQueue()
print(obj.getRear())
print(obj.isFull())
print(obj.deleteLast())
obj.printQueue()
print(obj.insertFront(4))
obj.printQueue()



# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()
