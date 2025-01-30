## مميزات الـ Stack

1. **إدارة البيانات بسهولة:**  
   الـ Stack بيعتمد على مبدأ LIFO (Last In, First Out)، وده بيسهل إدارة البيانات خاصة فى الخوارزميات زى الـ Recursion.
2. **استخدام فعال فى التطبيقات:**  
   الـ Stack بيستخدم فى حاجات كتير زى الـ Function Calls, Undo/Redo Operations، والـ Expression Evaluation.
3. **سهولة الإضافة والحذف:**  
   الإضافة (Push) والحذف (Pop) بتتم من نفس المكان (الـ Top)، وده بيخلى العمليات سريعة جدًا.

---

## عيوب الـ Stack

1. **سعة محدودة فى الذاكرة:**  
   لو الـ Stack معمول باستخدام Array، هيبقى عندك حد أقصى للبيانات، ولو عديته هتحتاج إعادة تخصيص.
2. **مش مرن زى الـ Linked List:**  
   مش بتقدر تضيف أو تمسح بيانات من النص بسهولة، العمليات دايمًا بتحصل عند الـ Top.
3. **Overflow وUnderflow Errors:**  
   لو حاولت تضيف بيانات أكتر من السعة، هيحصل Overflow، ولو حاولت تحذف من Stack فاضى، هيحصل Underflow.

---

## Big O Complexity

| العملية             | التعقيد الزمنى |
| ------------------- | -------------- |
| الإضافة (Push)      | O(1)           |
| الحذف (Pop)         | O(1)           |
| التمرير (Traversal) | O(n)           |
| البحث (Search)      | O(n)           |

### Stack Interface Using Array

```ts
interface Stack<T> {
  items: T[];

  size(): number;

  isEmpty(): boolean;

  push(data: T): void;

  pop(): T | null;

  // Method to peek at the top element without removing it
  peek(): T | null;

  clear(): void;

  printStack(): void;
}
```

### Stack Interface Using linked list

```ts
interface Node<T> {
  data: T;
  next: Node<T> | null;
}

interface Stack<T> {
  top: Node<T> | null;
  count: number;

  size(): number;

  isEmpty(): boolean;

  push(data: T): void;

  pop(): T | null;

  // Method to peek at the top element without removing it
  peek(): T | null;

  clear(): void;

  printStack(): void;
}
```
