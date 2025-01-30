

from typing import List



# def insertionSort(arr: List[int]):
#     pivot = 0

#     for i in range(1, len(arr)):
#         if arr[pivot] > arr[i]:
#             if pivot > 0:
#                 startIdx = i
#                 while startIdx > 0 and arr[startIdx] < arr[startIdx-1]:
#                     (arr[startIdx], arr[startIdx-1]
#                      ) = (arr[startIdx-1], arr[startIdx])
#                     startIdx -= 1
#             else:
#                 (arr[pivot], arr[i]) = (arr[i], arr[pivot])
#                 pivot += 1
#         else:
#             startIdx = i
#             while startIdx >= pivot and arr[startIdx] < arr[startIdx-1]:
#                 (arr[startIdx], arr[startIdx-1]
#                  ) = (arr[startIdx-1], arr[startIdx])
#                 startIdx -= 1

#     return arr



# GPT
def insertionSort(arr: List[int]) -> List[int]:
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        # Move elements greater than key to the right
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        # Insert key into its correct position
        arr[j + 1] = key

    return arr


# print(insertionSort([5, 2, 0, 11, 10, -2]))
# print(insertionSort([2, 5, 0, 10, -2]))
# print(insertionSort([2, 0, 5, 10, -2]))

# print(insertionSort([5, 2, 0, 11, 10, -2]))
print(insertionSort([1, 2, 3, 4, 5]))