## مميزات الـ Queue

1. **إدارة البيانات بشكل منظم:**  
   الـ Queue بيعتمد على مبدأ FIFO (First In, First Out)، وده مناسب جدًا للمهام المرتبة زى الطوابير الحقيقية.
2. **استخدام فعال فى التطبيقات:**  
   بيستخدم فى تطبيقات زى الـ Scheduling فى الـ Operating Systems، وعمليات الـ Buffering زى الطباعة والتحميل.
3. **سهولة التنفيذ:**  
   الإضافة (Enqueue) بتتم فى النهاية (Rear)، والحذف (Dequeue) بيتم من البداية (Front)، وده بيحقق تنظيم سلس.

---

## عيوب الـ Queue

1. **سعة محدودة فى الذاكرة:**  
   لو الـ Queue معمول باستخدام Array، هيبقى عندك حد أقصى للبيانات، ولو عديته هتحتاج إعادة تخصيص.
2. **مش مرن زى الـ Linked List:**  
   الـ Circular Queue بيحاول يحل مشكلة الـ Overflow، لكن بيبقى معقد فى الإدارة.
3. **ازدحام البيانات:**  
   لو مش بتدير البيانات بشكل كويس، ممكن تواجه ازدحام فى البيانات القديمة فى الـ Front، وده هيأثر على الكفاءة.

---

## Big O Complexity

| العملية             | التعقيد الزمنى |
| ------------------- | -------------- |
| الإضافة (Enqueue)   | O(1)           |
| الحذف (Dequeue)     | O(1)           |
| التمرير (Traversal) | O(n)           |
| البحث (Search)      | O(n)           |

---

### Queue Interface Using Array

```typescript
interface Queue<T> {
  items: T[];

  size(): number;

  isEmpty(): boolean;

  enqueue(data: T): void;

  dequeue(): T | null;

  // Method to peek at the front element without removing it
  frontValue(): T | null;

  clear(): void;

  printQueue(): void;
}
```

### Queue Interface Using Linked List

```typescript
interface Node<T> {
  data: T;
  next: Node<T> | null;
}

interface Queue<T> {
  front: Node<T> | null;
  rear: Node<T> | null;
  count: number;

  size(): number;

  isEmpty(): boolean;

  enqueue(data: T): void;

  dequeue(): T | null;

  // Method to peek at the front element without removing it
  frontValue(): T | null;

  clear(): void;

  printQueue(): void;
}

```