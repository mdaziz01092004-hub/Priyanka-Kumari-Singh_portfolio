import { useEffect, useState } from 'react';
import { CheckCircle2, Edit3, Trash2, Plus, X } from 'lucide-react';

const defaultTasks = [
  { id: 169, text: 'Draft professional summary for portfolio page', completed: false },
  { id: 170, text: 'Update contact form validation and success feedback', completed: true },
  { id: 171, text: 'Add new task manager page for CRUD demonstration', completed: false },
];

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('portfolio-todo-tasks');
    if (!savedTasks) return defaultTasks;

    try {
      return JSON.parse(savedTasks);
    } catch (error) {
      console.warn('Failed to read saved tasks:', error);
      return defaultTasks;
    }
  });
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    localStorage.setItem('portfolio-todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmedTask = newTask.trim();
    if (!trimmedTask) return;

    setTasks((prev) => [
      { id: Date.now(), text: trimmedTask, completed: false },
      ...prev,
    ]);
    setNewTask('');
  };

  const handleToggleCompleted = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    if (editTaskId === taskId) {
      setEditTaskId(null);
      setEditText('');
    }
  };

  const handleStartEdit = (task) => {
    setEditTaskId(task.id);
    setEditText(task.text);
  };

  const handleSaveEdit = (taskId) => {
    const trimmedEdit = editText.trim();
    if (!trimmedEdit) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, text: trimmedEdit } : task
      )
    );
    setEditTaskId(null);
    setEditText('');
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditText('');
  };

  return (
    <section id="todo" className="pt-28 pb-20 min-h-[calc(100vh-160px)] bg-literary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-ink mb-4">
            Task Manager
          </h2>
          <p className="text-ink-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A sleek task tracker for creating, updating, completing, and removing daily work items.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-3xl border border-literary-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-literary-500 mb-3">Total tasks</p>
            <p className="text-3xl font-bold text-ink">{tasks.length}</p>
          </div>
          <div className="rounded-3xl border border-literary-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-literary-500 mb-3">Completed</p>
            <p className="text-3xl font-bold text-ink">{tasks.filter((task) => task.completed).length}</p>
          </div>
          <div className="rounded-3xl border border-literary-200 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-literary-500 mb-3">Pending</p>
            <p className="text-3xl font-bold text-ink">{tasks.filter((task) => !task.completed).length}</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md border border-literary-200 shadow-sm rounded-3xl p-8">
          <form onSubmit={handleAddTask} className="mb-8 grid gap-4 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="new-task">New task</label>
            <input
              id="new-task"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="w-full rounded-2xl border border-literary-200 bg-literary-50 px-4 py-3 text-sm text-ink focus:border-literary-400 focus:outline-none focus:ring-2 focus:ring-literary-200"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-literary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-literary-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </form>

          <div className="space-y-4">
            {tasks.length === 0 ? (
              <div className="rounded-3xl border border-literary-200 bg-literary-50 p-8 text-center text-sm text-ink-muted">
                No tasks yet. Add your first task to get started.
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-3xl border border-literary-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <label className="inline-flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleToggleCompleted(task.id)}
                          className="h-5 w-5 rounded border-literary-300 text-literary-600 focus:ring-literary-500"
                        />
                        <div>
                          {editTaskId === task.id ? (
                            <input
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              className="w-full rounded-2xl border border-literary-200 bg-literary-50 px-3 py-2 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-literary-200"
                            />
                          ) : (
                            <span className={`text-sm font-medium ${task.completed ? 'text-ink-muted line-through' : 'text-ink'}`}>
                              {task.text}
                            </span>
                          )}
                        </div>
                      </label>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {editTaskId === task.id ? (
                        <>
                          <button
                            type="button"
                            onClick={() => handleSaveEdit(task.id)}
                            className="inline-flex items-center gap-2 rounded-full bg-literary-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-literary-700"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="inline-flex items-center gap-2 rounded-full border border-literary-200 bg-white px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-literary-50"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => handleStartEdit(task)}
                            className="inline-flex items-center gap-2 rounded-full border border-literary-200 bg-literary-50 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-literary-100"
                          >
                            <Edit3 className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteTask(task.id)}
                            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700 transition-colors hover:bg-rose-100"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
