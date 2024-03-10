import { useToDo } from "./ToDoContext";

export default function AddTask() {
  //const [addButton, setAddButton] = useState();
  const handleAddButton = () => {
    const modal = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const {
    handleAddTask,
    handleTaskTitle,
    handleTaskRemarks,
    taskTitle,
    taskRemarks,
  } = useToDo();

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={handleAddButton}>
        Add Task
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div>
            <p>Title:</p>
            <input type="text" value={taskTitle} onChange={handleTaskTitle} />
            <br />
            <p>Description:</p>
            <input
              type="text"
              value={taskRemarks}
              onChange={handleTaskRemarks}
            />
          </div>

          <div>
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Add Your Task To
              </option>
              <option>Habits</option>
              <option>Dailies</option>
              <option>To DO</option>
              <option>Rewards</option>
            </select>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={handleAddTask}>
                Submit
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
