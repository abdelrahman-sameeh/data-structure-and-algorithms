from typing import TypeVar, List

T = TypeVar('T')


class Graph:
    def __init__(self):
        self.vertices = dict()

    def add_vertex(self, vertex: T) -> None:
        """
        Add a vertex to the graph.
        """
        if vertex in self.vertices:
            return f"vertex {vertex} is already exist"

        self.vertices[vertex] = set()
        return True

    def add_edge(self, vertex1: T, vertex2: T) -> None:
        """
        Add an edge between two vertices.
        """
        if not self.exist_vertex(vertex1) or not self.exist_vertex(vertex2):
            return "Both vertices must exist in the graph."
        self.vertices[vertex1].add(vertex2)
        self.vertices[vertex2].add(vertex1)
        return True

    def exist_vertex(self, vertex):
        return vertex in self.vertices

    def remove_vertex(self, vertex: T) -> None:
        """
        Remove a vertex from the graph.
        """
        if not self.exist_vertex(vertex):
            return "vertex is not exist"

        target_vertices = self.vertices.get(vertex)
        del self.vertices[vertex]
        for v in target_vertices:
            self.vertices[v].remove(vertex)

    def remove_edge(self, vertex1: T, vertex2: T) -> None:
        """
        Remove an edge between two vertices.
        """
        if not self.exist_vertex(vertex1) or not self.exist_vertex(vertex2):
            return "Both vertices must exist in the graph."

        self.vertices[vertex1].remove(vertex2)
        self.vertices[vertex2].remove(vertex1)
        return True

    def print_vertices(self):
        print("*** Start Graph ***")
        for vertex in self.vertices:
            print(vertex, self.vertices.get(vertex))
        print("*** End Graph ***")

    def bfs(self, start_vertex: T) -> List[T]:
        """
        Perform Breadth-First Search starting from a vertex.
        """
        

    def dfs(self, start_vertex: T) -> List[T]:
        """
        Perform Depth-First Search starting from a vertex.
        """


graph = Graph()

print(graph.add_vertex("A"))
print(graph.add_vertex("B"))
print(graph.add_vertex("C"))
print(graph.add_vertex("D"))

print(graph.add_edge("A", "B"))
print(graph.add_edge("A", "C"))
print(graph.add_edge("A", "D"))
print(graph.add_edge("B", "D"))
print(graph.add_edge("B", "C"))

print(graph.remove_vertex("D"))

print(graph.remove_edge("A", "C"))

graph.print_vertices()
