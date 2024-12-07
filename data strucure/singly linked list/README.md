
---

## مميزات السنجلى لينكد ليست  
1. **ديناميكية:**  
   بتقدر تضيف أو تمسح عناصر بسهولة من غير ما تحتاج تزود أو تقلل مساحة فى الذاكرة.  
2. **استهلاك ذاكرة فعال:**  
   مش محتاج تحجز مساحة كبيرة زى الـ Arrays، وبتستخدم الذاكرة على قد الحاجة.  
3. **إضافة أو حذف سريع:**  
   الإضافة أو الحذف فى النص أو أى مكان مش بياخد وقت كبير زى الـ Arrays.  

---

## عيوب السنجلى لينكد ليست  
1. **الوصول البطىء للعناصر:**  
   عشان توصل لعنصر معين، لازم تمشى على كل العناصر واحدة واحدة لحد ما توصل.  
2. **زيادة استخدام المؤشرات:**  
   كل عقدة فيها مؤشر (Pointer)، وده بيستهلك شوية ذاكرة زيادة.  
3. **مش مرنة فى الرجوع للخلف:**  
   بما إن كل عقدة بتشاور على العقدة اللى بعدها بس، مش هتقدر ترجع للعقدة اللى قبلها.  

---

## Big O Complexity  
| العملية            | التعقيد الزمنى |  
|--------------------|---------------|  
| البحث (Search)     | O(n)          |  
| الإضافة فى الآخر   | O(n)          |  
| الإضافة فى الأول   | O(1)          |  
| الحذف              | O(n)          |  
| التمرير (Traversal)| O(n)          |  



```ts
// Define the Node interface
interface Node<T> {
  data: T;  // The data of the node
  next: Node<T> | null;  // Pointer to the next node (null if it is the last node)
}

// Define the LinkedList interface
interface LinkedList<T> {
  head: Node<T> | null;  // The first node in the list (null if the list is empty)
  tail: Node<T> | null;  // The last node in the list (null if the list is empty)
  count: number;  // The number of nodes in the list

  // Method to get the size of the list
  size(): number;

  // Method to clear the list
  clear(): void;

  // Method to get the first node
  getFirst(): Node<T> | null;

  // Method to get the last node
  getLast(): Node<T> | null;

  // Method to add a node to the start of the list
  addToFirst(data: T): Node<T>;

  // Method to add a node to the end of the list
  addToLast(data: T): Node<T>;

  // Method to append a node to the list (either at the start or end)
  append(data: T): Node<T>;

  // Method to search for a value in the list
  search(value: T): boolean;

  // Method to delete a value from the list
  delete(value: T): boolean;

  // Method to print the list
  printList(): void;
}

```
