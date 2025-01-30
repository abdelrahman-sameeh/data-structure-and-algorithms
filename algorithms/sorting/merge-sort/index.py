def merge(leftArr, rightArr):
  sortedArr = []
  
  while leftArr and rightArr:
    if leftArr[0] < rightArr[0]:
      sortedArr.append(leftArr[0])
      leftArr = leftArr[1:]
    else:
      sortedArr.append(rightArr[0])
      rightArr = rightArr[1:]

  if leftArr:
    sortedArr += leftArr

  if rightArr:
    sortedArr += rightArr
  
  return sortedArr

import math
def mergeSort(arr):
  if len(arr) < 2:
    return arr
  
  mid = math.ceil(len(arr) / 2)
  leftArr = mergeSort(arr[:mid])
  rightArr = mergeSort(arr[mid:])
  
  return merge(leftArr, rightArr)


print(mergeSort([5, 3, 10, 1, 2, 6]))



