import { useState } from "react";

type objectProps = {
  object: string;
  object2: string;
};

type Task = {
  title: string;
  remarks: string;
  // Assuming date is represented as a string
};

export function ToDoList({ object, object2 }: objectProps) {
  const [task, setTask] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskRemarks, setTaskRemarks] = useState("");
  //const [newTask, setNewTask] = useState("");

  const handleTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  //const handleTaskRemarks = (event: React.ChangeEvent<HTMLInputElement>) => {setTaskRemarks(event.target.value);};

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      return; // Don't add task if title or remarks are empty
    }

    const newTask: Task = {
      title: taskTitle,
      remarks: taskRemarks,
    };

    setTask((prevTask) => [...prevTask, newTask]);
    setTaskTitle("");
    setTaskRemarks("");
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTask();
  };

  return (
    <>
      <div className="bg-lime-100 rounded-xl py-3 px-2 pr-4 ml-3">
        {/* input area */}
        <div>
          <div className="py-4 px-8 ml-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={object2}
                className="input input-bordered w-full max-w-xs bg-emerald-100 font-bold my-2"
                value={taskTitle}
                onChange={handleTaskTitle}
              />
              <br />
              {/*            <input
              type="text"
              placeholder="write notes"
              className="input input-bordered w-full max-w-xs bg-emerald-100"
              value={taskRemarks}
              onChange={handleTaskRemarks}
  /> */}
              {/*<button
                className="btn btn-outline btn-sm bg-lime-600 border-lime-600 "
                onClick={handleAddTask}
              >
                Add Task
</button>*/}
            </form>
          </div>
        </div>

        <div className=" bg-lime-200 rounded-xl px-2 py-7 ml-2 ">
          <h2 className=" text-2xl font-bold text-green-950">
            {object} &nbsp;{task.length}
          </h2>

          <div className=" text-justify font-bold text-white">
            <div>
              {task.map((task, index) => (
                <div
                  className="card card-compact w- m-2 ml-4 pl-3 bg-lime-800 shadow-xl hover:bg-lime-400"
                  key={index}
                >
                  <h1 className="text-lg">{task.title}</h1>
                  <span className="card-body">{task.remarks}</span>

                  <div className="card-actions justify-end">
                    <button
                      className=" btn btn-xs btn-error ml-2 m-1"
                      onClick={() => handleDeleteTask(index)}
                    >
                      {" "}
                      X{" "}
                    </button>
                    <button
                      className="btn btn-xs btn-success ml-2 m-1"
                      onClick={() => handleMoveTaskUp(index)}
                    >
                      ⬆️
                    </button>
                    <button
                      className="btn btn-xs btn-success ml-2 mr-3 m-1"
                      onClick={() => handleMoveTaskDown(index)}
                    >
                      ⬇️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
