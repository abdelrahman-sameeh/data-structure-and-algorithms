
from typing import List


def selectionSort(arr: List[int]):
  for index, item in enumerate(arr):
    minItem = min(arr[index:])
    minIndex = arr[index:].index(minItem)
    tmp = arr[index]
    arr[index] = minItem
    arr[minIndex+index]=tmp
    
  return arr


# another solution (Clean Code) 
def selectionSort(arr: List[int]):
  for i in range(len(arr)):
    min_index = i
    
    for j in range(i, len(arr)):
      if arr[j] < arr[min_index]:
        min_index = j

    tmp = arr[i]
    arr[i] = arr[min_index] 
    arr[min_index] = tmp
    
  return arr




print(selectionSort([5, 9, 1, 3, 2, -1]))



