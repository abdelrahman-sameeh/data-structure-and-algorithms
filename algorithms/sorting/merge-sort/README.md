# Merge Sort

## الوصف 

**الـ Merge Sort** هي خوارزمية تقسيم ودمج فعّالة لترتيب البيانات. فكرتها إنها بتقسم الليستة لجزئين، وتستخدم الخوارزمية دي في كل جزء لوحده لحد ما نوصل لجزء مكون من عنصر واحد. بعد كده، بنبدأ ندمج الأجزاء دي مع بعض علشان نرجع الليستة مترتبة.

### الخطوات:

1. لو الليستة فيها عنصر واحد أو مفيش عناصر، خلاص هيبقى الترتيب تم.
2. قسم الليستة لنصفين.
3. طبق الخوارزمية دي على النصين.
4. بعد كده، ادمج النصفين المترتبين في بعضهم علشان تحصل على ليستة مرتبة.

### مثال:

لو عندنا الليستة: `[5, 2, 4, 6, 1, 3]`

1. نبدأ بتقسيم الليستة لنصين: `[5, 2, 4]` و `[6, 1, 3]`.
2. نطبق Merge Sort على كل جزء. على سبيل المثال، الجزء الأول يصبح `[2, 4, 5]` والجزء التاني يصبح `[1, 3, 6]`.
3. ندمج الجزئين المترتبين: `[1, 2, 3, 4, 5, 6]`.

Time Complexity
Worst Case:
O(n log n) (لأي ترتيب في البيانات).

Best Case:
O(n log n) (لأي ترتيب في البيانات).

Average Case:
O(n log n).
---

## Description (English)

**Merge Sort** is an efficient divide-and-conquer sorting algorithm. The idea is to divide the list into two halves, recursively apply the algorithm to each half until each sublist has only one element, then merge the sorted sublists back together to get the sorted list.

### Steps:

1. If the list has one or no elements, it's already sorted.
2. Divide the list into two halves.
3. Recursively apply Merge Sort on each half.
4. Once the sublists are sorted, merge them back together.

### Example:

For the list: `[5, 2, 4, 6, 1, 3]`

1. Divide the list into two halves: `[5, 2, 4]` and `[6, 1, 3]`.
2. Apply Merge Sort on each half. For example, the first half becomes `[2, 4, 5]` and the second half becomes `[1, 3, 6]`.
3. Merge the two sorted halves together: `[1, 2, 3, 4, 5, 6]`.

---

## Implementation in Python

```python
from typing import List

def mergeSort(arr: List[int]) -> List[int]:
    if len(arr) <= 1:
        return arr

    # Find the middle of the list
    mid = len(arr) // 2

    # Divide the list into two halves
    left_half = mergeSort(arr[:mid])
    right_half = mergeSort(arr[mid:])

    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left: List[int], right: List[int]) -> List[int]:
    sorted_list = []
    i = j = 0

    # Merge the two halves
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_list.append(left[i])
            i += 1
        else:
            sorted_list.append(right[j])
            j += 1

    # Append the remaining elements
    sorted_list.extend(left[i:])
    sorted_list.extend(right[j:])

    return sorted_list
