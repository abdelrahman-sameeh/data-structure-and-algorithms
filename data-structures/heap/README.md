## مميزات الـ Heap

1. **إدارة البيانات بشكل مرن ومنظم:**  
   الـ Heap بيسمح بترتيب البيانات بحيث يحقق خاصية الـ Heap Property (مثلاً: Max-Heap أو Min-Heap)، وده بيكون مفيد فى تطبيقات زى الـ Priority Queue.

2. **كفاءة فى الأداء:**  
   العمليات الرئيسية زى الإضافة (Insertion) والحذف (Deletion) بتتم فى وقت `O(log n)`، وده بيجعل الهيب اختيار فعال للمهام اللى بتحتاج ترتيب ديناميكى للبيانات.

3. **استخدامات متعددة:**  
   الـ Heap بيستخدم فى تطبيقات كتير زى:
   - **جدولة العمليات (Task Scheduling):** لترتيب المهام حسب الأولوية.
   - **خوارزميات المسارات الأقصر:** زى خوارزمية Dijkstra.
   - **الفرز (Heap Sort):** لترتيب البيانات بكفاءة.

---

## عيوب الـ Heap

1. **هيكل بيانات معقد:**  
   مقارنة بالـ Array أو الـ Linked List، الـ Heap بيحتاج فهم أعمق وعمليات صيانة مستمرة (مثل إعادة توازن الشجرة) لضمان الحفاظ على خاصية الهيب.

2. **استهلاك إضافى للذاكرة:**  
   لو معمول باستخدام Binary Tree، هيحتاج Pointer لكل عقدة، ولو معمول باستخدام Array، ممكن تواجه تحديات فى التعامل مع الحجم الديناميكى.

3. **عمليات البحث بطيئة:**  
   على عكس الـ Binary Search Tree، الـ Heap مش مصمم لعمليات البحث السريعة، وده بيخلى التعقيد الزمنى للبحث `O(n)`.

---

## Big O Complexity

| العملية                           | التعقيد الزمنى |
| -------------------------------- | -------------- |
| الإضافة (Insertion)              | `O(log n)`     |
| الحذف (Deletion)                 | `O(log n)`     |
| البحث (Search)                   | `O(n)`         |
| الحصول على العنصر الأعلى (Peek)  | `O(1)`         |

---


## Heap Interface Using Array

```typescript
interface Heap<T> {
  // Returns the size of the heap
  size(): number;

  // Checks if the heap is empty
  isEmpty(): boolean;

  // Inserts an element into the heap
  insert(value: T): void;

  // Removes and returns the root element of the heap
  remove(): T | null;

  // Returns the root element of the heap without removing it
  peek(): T | null;

  // Clears all elements from the heap
  clear(): void;

  // Prints the current state of the heap (for debugging purposes)
  printHeap(): void;
}
