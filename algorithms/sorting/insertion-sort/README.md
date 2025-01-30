# Insertion Sort

## الوصف (بالمصرى)

**الـ Insertion Sort** خوارزمية ترتيب سهلة الفهم. فكرتها إنها بتبني الليستة المترتبة واحدة بواحدة. بتاخد كل عنصر وتضيفه في المكان المناسب في الجزء المترتب من الليستة. زي ما بتلعب ورق وترتب الورق في إيدك واحدة واحدة.

### الخطوات:

1. ابدأ من العنصر التاني في الليستة (لأن العنصر الأول لوحده مترتب).
2. قارن العنصر الحالي بالعناصر اللي قبله في الجزء المترتب.
3. لو العنصر الحالي أصغر من العناصر اللي قبله، حرّك العناصر الأكبر منه خطوة لليمين.
4. ضع العنصر الحالي في المكان المناسب.
5. كرر الخطوات دي لكل العناصر لحد ما الليستة كلها تترتب.

### مثال:

لو عندنا الليستة: `[5, 2, 4, 6, 1, 3]`

1. نبدأ بالعنصر التاني (2) ونقارنه بالعنصر الأول (5).
2. نلاحظ إن 2 أصغر من 5، فنحرّك 5 لليمين ونضع 2 في مكانه.
3. الليستة تصير: `[2, 5, 4, 6, 1, 3]`.
4. نكمل العملية لحد ما الليستة كلها تترتب.

Time Complexity
Worst Case:
O(n2) (when the list is in reverse order).

Best Case:
O(n) (when the list is already sorted).

Average Case:
O(n2).
---

## Description (English)

**Insertion Sort** is a simple sorting algorithm. It builds the sorted list one element at a time by inserting each element into its correct position in the already sorted part of the list. It's like sorting a hand of playing cards one by one.

### Steps:

1. Start from the second element in the list (the first element is already sorted).
2. Compare the current element with the previous elements in the sorted part.
3. If the current element is smaller than the previous elements, shift the larger elements to the right.
4. Insert the current element into its correct position.
5. Repeat these steps for all elements until the entire list is sorted.

### Example:

For the list: `[5, 2, 4, 6, 1, 3]`

1. Start with the second element (2) and compare it with the first element (5).
2. Since 2 is smaller than 5, move 5 to the right and place 2 in its position.
3. The list becomes: `[2, 5, 4, 6, 1, 3]`.
4. Continue this process until the entire list is sorted.

---

## Implementation in Python

```python
from typing import List

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
```
