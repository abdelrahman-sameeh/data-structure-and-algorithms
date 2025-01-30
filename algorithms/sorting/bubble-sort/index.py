
from typing import List


def bubble_sort(arr: List[int]):
  for idx1 in range(0, len(arr)):
    for idx2 in range(1, len(arr)-idx1):
      if arr[idx2]<arr[idx2-1]:
        tmp = arr[idx2]
        arr[idx2] = arr[idx2-1]
        arr[idx2-1] = tmp

  return arr


print(bubble_sort([5, 6, 4, 1, 3, -1]))
