# Graph

## مميزات الـ Graph

1. **تمثيل العلاقات المعقدة:**  
   الـ Graph بيستخدم لتمثيل العلاقات بين الكائنات مثل الشبكات الاجتماعية أو الخرائط.
2. **تنوع التطبيقات:**  
   مناسب لتطبيقات مثل خوارزميات البحث (BFS, DFS)، شبكات الطرق، وتحليل البيانات.
3. **دعم أنماط متعددة:**  
   يمكن تمثيل الـ Graph بشكل موجه (Directed) أو غير موجه (Undirected) حسب التطبيق.

---

## عيوب الـ Graph

1. **التعقيد الزمنى:**  
   العمليات على الـ Graph مثل البحث والإضافة ممكن تكون مكلفة زمنيًا فى حالة وجود عدد كبير من العقد (Nodes).
2. **استهلاك الذاكرة:**  
   تخزين العلاقات بين العقد يحتاج ذاكرة كبيرة، خاصة فى الـ Adjacency Matrix.
3. **التنفيذ المعقد:**  
   كتابة خوارزميات التعامل مع الـ Graph ممكن تكون معقدة مقارنة ببعض الهياكل الأخرى.

---

## Big O Complexity

| العملية             | التعقيد الزمنى |
| ------------------- | -------------- |
| الإضافة (Add Edge)  | O(1) for adjacency list, O(V^2) for adjacency matrix |
| البحث (Search)      | O(V + E) for BFS/DFS |
| التحقق من وجود حافة | O(1) for adjacency matrix, O(V) for adjacency list |

---

## Graph Interface

```python
from typing import TypeVar, List, Any

T = TypeVar('T')

class Graph:
    def __init__(self):
        self.vertices: List[T] = []

    def add_vertex(self, vertex: T) -> None:
        """
        Add a vertex to the graph.
        """
        pass

    def add_edge(self, vertex1: T, vertex2: T) -> None:
        """
        Add an edge between two vertices.
        """
        pass

    def remove_vertex(self, vertex: T) -> None:
        """
        Remove a vertex from the graph.
        """
        pass

    def remove_edge(self, vertex1: T, vertex2: T) -> None:
        """
        Remove an edge between two vertices.
        """
        pass

    def bfs(self, start_vertex: T) -> List[T]:
        """
        Perform Breadth-First Search starting from a vertex.
        """
        pass

    def dfs(self, start_vertex: T) -> List[T]:
        """
        Perform Depth-First Search starting from a vertex.
        """
        pass
