import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiSave } from "react-icons/bi";

type TodoItem = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");

  const API_URL = "http://localhost:5006/api/todo";

  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTodo, isCompleted: false }),
    });

    if (res.ok) {
      setNewTodo("");
      fetchTodos();
    }
  };

  const editTodo = async (id: string, updatedTitle: string) => {
    if (!updatedTitle.trim()) return;

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: updatedTitle }),
    });

    if (res.ok) {
      fetchTodos();
      setEditingId(null);
      setEditedTitle("");
    }
  };

  const deleteTodo = async (id: string) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  const startEditing = (todo: TodoItem) => {
    setEditingId(todo.id);
    setEditedTitle(todo.title);
  };

  const saveEdit = (id: string) => {
    editTodo(id, editedTitle);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <h1>📝 My Tasks</h1>

      <div className="todo-input-group">
        <input
          type="text"
          placeholder="New Task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="empty-message">No tasks added yet.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit(todo.id);
                  }}
                  autoFocus
                />
              ) : (
                <span>{todo.title}</span>
              )}

              <div>
                {editingId === todo.id ? (
                  <button onClick={() => saveEdit(todo.id)} className="save-btn"><BiSave /></button>
                ) : (
                  <button onClick={() => startEditing(todo)} className="edit-btn">
                    <GrEdit />
                  </button>
                )}
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                  <FaRegTrashAlt />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
