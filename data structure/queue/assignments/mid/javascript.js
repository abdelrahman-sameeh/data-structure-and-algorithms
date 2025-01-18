// 622. Design Circular Queue

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = []
  this.length = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  this.queue.push(value)
  console.log(this.queue.length, this.queue);
  
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    
};

 
//  Your MyCircularQueue object will be instantiated and called as such:
 var obj = new MyCircularQueue(3)
 var param_1 = obj.enQueue(1)
 
 var param_2 = obj.deQueue()
 var param_3 = obj.Front()
 var param_4 = obj.Rear()
 var param_5 = obj.isEmpty()
 var param_6 = obj.isFull()
 