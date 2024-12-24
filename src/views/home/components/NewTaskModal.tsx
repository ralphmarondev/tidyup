function NewTaskModal() {
  return (
    <div className="modal fade" id="newTaskModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
         aria-labelledby="newTaskLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newTaskLabel">New Task</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="col mb-3">
                <label htmlFor="task-name" className="form-label">Task Name:</label>
                <textarea name="task-name" className="form-control" placeholder="Enter task name"/>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="start-date" className="form-label">Start Date:</label>
                  <input type="date" id="start-date" className="form-control" placeholder="Start date"/>
                </div>
                <div className="col">
                  <label htmlFor="end-date" className="form-label">End Date:</label>
                  <input type="date" id="end-date" className="form-control" placeholder="End date"/>
                </div>
              </div>
              <div className="col mb-3">
                <label htmlFor="task-priority" className="form-label">Priority</label>
                <select className="form-control">
                  <option>Enter task priority</option>
                  <option>HIGH</option>
                  <option>MEDIUM</option>
                  <option>LOW</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTaskModal