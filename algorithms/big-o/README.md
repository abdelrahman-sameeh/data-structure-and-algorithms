# دليل لفهم وتعريف Big O

## ما هي Big O؟
Big O هي طريقة رياضية تُستخدم لتحليل أداء الخوارزميات. تُركز على قياس **كفاءة الخوارزمية** من حيث الزمن أو المساحة التي تستهلكها مقارنة بحجم المدخلات.

---

## أنواع التعقيد في Big O
### 1. **O(1) - التعقيد الثابت**
الخوارزمية تنفذ في نفس الزمن بغض النظر عن حجم المدخلات.

**مثال:**
```python
def get_first_element(array):
    return array[0]
```

### 2. **O(log n) - التعقيد اللوغاريتمي**
يزداد الوقت اللازم للتنفيذ بشكل بطيء عند زيادة المدخلات.

**مثال:** البحث الثنائي:
```python
def binary_search(array, target):
    left, right = 0, len(array) - 1
    while left <= right:
        mid = (left + right) // 2
        if array[mid] == target:
            return mid
        elif array[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### 3. **O(n) - التعقيد الخطي**
الوقت يزداد بنفس معدل زيادة المدخلات.

**مثال:** البحث في قائمة:
```python
def linear_search(array, target):
    for element in array:
        if element == target:
            return True
    return False
```

### 4. **O(n log n) - التعقيد اللوغاريتمي الخطي**
غالبًا ما يكون مع الخوارزميات التي تعتمد على التقسيم، مثل الترتيب.

**مثال:**
```python
def merge_sort(array):
    if len(array) <= 1:
        return array
    mid = len(array) // 2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

### 5. **O(n²) - التعقيد التربيعي**
الوقت يزداد بشكل كبير مع زيادة المدخلات. غالبًا ما يظهر في الخوارزميات التي تستخدم التكرار المتداخل.

**مثال:**
```python
def bubble_sort(array):
    n = len(array)
    for i in range(n):
        for j in range(0, n-i-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
```

### 6. **O(2^n) - التعقيد الأسي**
عدد العمليات يتضاعف مع كل زيادة بسيطة في المدخلات.

**مثال:**
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

---

## جدول ملخص للتعقيد
| التعقيد | الأداء       |
|---------|--------------|
| O(1)    | ممتاز        |
| O(log n)| جيد جدًا     |
| O(n)    | جيد          |
| O(n log n)| مقبول     |
| O(n²)   | سيء          |
| O(2^n)  | سيء جدًا    |

---

## نصائح لفهم Big O
1. ابدأ بفهم أنواع التعقيد البسيطة مثل O(1) و O(n).
2. قم بتحليل الخوارزمية خطوة بخطوة.
3. ركز على أسوأ الحالات لتحليل الأداء.
4. تدرب على كتابة وتحليل خوارزميات مختلفة.
