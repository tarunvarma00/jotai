import { useAtom } from "jotai";
import { useState } from "react";
import tasksAtom from "./TasksAtom";
import "./CreateTask.css";

function CreateTask() {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="atom-input">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="atom-input">
        <input
          type="text"
          placeholder="Task description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <button className="atom-button" type="submit">
        Add task
      </button>
    </form>
  );
}

export default CreateTask;
