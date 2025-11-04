import React, { useMemo, useState, useCallback } from 'react';

// Minimal, dependency-free preview Kanban with accessible HTML5 drag & keyboard moves
const initialData = {
  columns: [
    { id: 'backlog', title: 'Backlog' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'review', title: 'Review' },
    { id: 'done', title: 'Done' },
  ],
  tasks: [
    { id: 't1', title: 'Design app logo', priority: 'Low', columnId: 'backlog' },
    { id: 't2', title: 'API integration', priority: 'High', columnId: 'in-progress' },
    { id: 't3', title: 'Write unit tests', priority: 'Medium', columnId: 'review' },
    { id: 't4', title: 'Setup CI/CD', priority: 'High', columnId: 'backlog' },
    { id: 't5', title: 'Accessibility audit', priority: 'Critical', columnId: 'in-progress' },
  ],
};

const priorityColor = (p) => {
  switch (p) {
    case 'Critical':
      return 'bg-rose-100 text-rose-700';
    case 'High':
      return 'bg-orange-100 text-orange-700';
    case 'Medium':
      return 'bg-amber-100 text-amber-700';
    default:
      return 'bg-emerald-100 text-emerald-700';
  }
};

export default function KanbanPreview() {
  const [tasks, setTasks] = useState(initialData.tasks);
  const columns = initialData.columns;

  const grouped = useMemo(() => {
    const map = Object.fromEntries(columns.map((c) => [c.id, []]));
    tasks.forEach((t) => map[t.columnId]?.push(t));
    return map;
  }, [tasks, columns]);

  const onDropTask = useCallback((taskId, targetColumnId) => {
    setTasks((prev) => prev.map((t) => (t.id === taskId ? { ...t, columnId: targetColumnId } : t)));
  }, []);

  const handleKeyboardMove = useCallback((taskId, targetColumnIndex) => {
    const cols = columns.map((c) => c.id);
    const target = cols[targetColumnIndex];
    if (target) onDropTask(taskId, target);
  }, [columns, onDropTask]);

  return (
    <section id="preview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Live Kanban Preview</h2>
          <p className="mt-1 text-sm text-neutral-600">Drag tasks between columns, or move with keyboard: select a card and press 1-4.</p>
        </div>
        <div className="text-sm text-neutral-600">Lightweight HTML5 drag, keyboard accessible</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col, idx) => (
          <KanbanColumn
            key={col.id}
            column={col}
            tasks={grouped[col.id]}
            onDropTask={onDropTask}
            columnIndex={idx}
          >
            {(task) => (
              <KanbanCard
                key={task.id}
                task={task}
                onKeyboardMove={(index) => handleKeyboardMove(task.id, index)}
              />
            )}
          </KanbanColumn>
        ))}
      </div>
    </section>
  );
}

function KanbanColumn({ column, tasks, onDropTask, children }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/task-id');
    if (taskId) onDropTask(taskId, column.id);
  };

  return (
    <div
      role="region"
      aria-labelledby={`${column.id}-label`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="rounded-xl border border-neutral-200 bg-white p-3 shadow-sm"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 id={`${column.id}-label`} className="font-medium text-neutral-900">
          {column.title}
        </h3>
        <span className="text-xs text-neutral-500">{tasks?.length ?? 0}</span>
      </div>

      <div className="space-y-3 min-h-24">
        {tasks && tasks.length > 0 ? (
          tasks.map((t) => (children ? children(t) : <KanbanCard key={t.id} task={t} />))
        ) : (
          <div className="text-sm text-neutral-500">No tasks</div>
        )}
      </div>
    </div>
  );
}

function KanbanCard({ task, onKeyboardMove }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData('text/task-id', task.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onKeyDown = (e) => {
    const key = e.key;
    if (['1', '2', '3', '4'].includes(key) && onKeyboardMove) {
      onKeyboardMove(Number(key) - 1);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <article
      role="article"
      tabIndex={0}
      aria-roledescription="Task card"
      draggable
      onDragStart={onDragStart}
      onKeyDown={onKeyDown}
      className="group rounded-lg border border-neutral-200 bg-white p-3 shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-medium text-neutral-900">{task.title}</h4>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${priorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
      </div>
      <p className="mt-2 text-xs text-neutral-500">Press 1-4 to move across columns</p>
    </article>
  );
}
