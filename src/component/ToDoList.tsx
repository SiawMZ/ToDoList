import { useState } from "react";

type objectProps = {
  object: string;
};

export function ToDoList({ object }: objectProps) {
  const [task, setTask] = useState(["test 1", "test 2"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask((prevTask) => [...prevTask, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const handleMoveTaskUp = (index: number) => {
    if (index > 0) {
      const updatedIndex = [...task];
      [updatedIndex[index], updatedIndex[index - 1]] = [
        updatedIndex[index - 1],
        updatedIndex[index],
      ];
      setTask(updatedIndex);
    }
  };

  const handleMoveTaskDown = (index: number) => {
    if (index < task.length - 1) {
      const updatedIndex = [...task];
      [updatedIndex[index], updatedIndex[index + 1]] = [
        updatedIndex[index + 1],
        updatedIndex[index],
      ];
      setTask(updatedIndex);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold underline">{object}</h2>

        <div className="card card-compact w-72 bg-indigo-950 shadow-xl hover:bg-indigo-900">
          <ul className="card-body card-actions justify-end">
            {task.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(index)}
                >
                  {" "}
                  X{" "}
                </button>
                <button
                  className="move-button"
                  onClick={() => handleMoveTaskUp(index)}
                >
                  ⬆️
                </button>
                <button
                  className="move-button"
                  onClick={() => handleMoveTaskDown(index)}
                >
                  ⬇️
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input
            type="text"
            placeholder="enter something"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
