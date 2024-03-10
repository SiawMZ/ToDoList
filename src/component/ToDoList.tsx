<<<<<<< HEAD
import { useState } from "react";
=======
import { useToDo } from "./ToDoContext";
>>>>>>> c67760880f994fa1b3796e0ed10ac6cafc3018aa

type objectProps2 = {
  object: string;
  tag: string;
};

export function ToDoList({ object, tag }: objectProps2) {
  const {
    handleSubmit,
    handleTaskTitle,
    taskTitle,
    handleDeleteTask,
    handleMoveTaskUp,
    handleMoveTaskDown,
    filteredTasks,
    task,
  } = useToDo();

  return (
    <>
      {/*      <TodoContext.Provider
        value={{
          task,
          setTask,
          taskTitle,
          setTaskTitle,
          taskRemarks,
          setTaskRemarks,
        }}
      >*/}
      <div className="bg-mz_green rounded-xl py-3 px-2 pr-4 ml-3 mt-2">
        {/* input area */}
        <div>
          <div className="py-4 px-8 ml-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={tag}
                className="input input-bordered w-full max-w-xs bg-white font-bold my-2"
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
              {filteredTasks.map((task, index) => (
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
      {/*</></TodoContext.Provider>*/}
    </>
  );
}
