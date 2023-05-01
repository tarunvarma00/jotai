import { useAtom } from "jotai";
import tasksAtom from "./TasksAtom";
import "./TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="tasksList">
      {tasks?.map((task) => (
        <div key={task.id} className="taskItem">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleChange(task.id)}
          />
          <span>{task.title}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
