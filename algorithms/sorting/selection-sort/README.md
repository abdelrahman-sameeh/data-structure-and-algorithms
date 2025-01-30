# Selection Sort

## English Description
The **Selection Sort** algorithm is a simple comparison-based sorting algorithm. It works by dividing the list into two parts:
1. The sorted part (initially empty).
2. The unsorted part (initially the entire list).

The algorithm repeatedly finds the smallest (or largest) element from the unsorted part and swaps it with the first element of the unsorted part, gradually growing the sorted section until the entire list is sorted.

### Steps:
1. Start with the first element and consider it the minimum.
2. Compare it with the remaining elements to find the smallest value.
3. Swap the smallest value with the first element of the unsorted section.
4. Move to the next position and repeat until the entire list is sorted.

**Time Complexity:**
- Best, Average, and Worst Case: **O(n²)** (due to nested loops).

**Space Complexity:**
- **O(1)** (in-place sorting).

---

## الوصف 
**خوارزمية Selection Sort** بسيطة وسهلة. فكرتها إنها بتقسم الليستة لقسمين:  
1. جزء sorted (فى الأول بيبقى فاضى).  
2. جزء un sorted (الليستة كلها فى الأول).  

الخوارزمية بتدور على أصغر قيمة (أو أكبر قيمة) فى الجزء المش متصنف، وبعدين بتبدّلها مع أول عنصر فى الجزء ده. العملية دى بتتكرر لحد ما الليستة كلها تبقى متصنفة.

### الخطوات:
1. هتجيب min value 
2. هتبدلها مع اول index 
3. بعد كدا حرك ال i بحيث اول index يبقا هو ال i+1
4. تكرر الخطوات لحد ما تخلص الليستة كلها.


**التعقيد الزمنى:**
- أحسن حالة، متوسط، أو أسوأ حالة: **O(n²)** (بسبب الحلقات المتداخلة).  


**Space Complexity:**
- **O(1)** (in-place sorting).
