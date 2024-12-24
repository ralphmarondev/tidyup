import React, {FormEvent, useState} from 'react'

interface TaskType {
  name: string,
  start_date: string,
  end_date: string,
  priority: number
}

function NewTaskModal() {
  const [task, setTask] = useState<TaskType>({
    name: '',
    start_date: '',
    end_date: '',
    priority: 1
  })

  const setTaskName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(prevTask => ({...prevTask, name: e.target.value}))
  }

  const setStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(prevTask => ({...prevTask, start_date: e.target.value}))
  }

  const setEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(prevTask => ({...prevTask, end_date: e.target.value}))
  }

  const setPriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask(prevTask => ({...prevTask, priority: parseInt(e.target.value)}))
  }

  const onSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(task)
  }

  return (
    <div
      className="modal fade"
      id="newTaskModal"
      tabIndex={-1}
      aria-labelledby="newTaskLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={onSave}>
            <div className="modal-header">
              <h5 className="modal-title" id="newTaskLabel">New Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="col mb-3">
                <label htmlFor="task-name" className="form-label">Task Name:</label>
                <textarea
                  name="task-name"
                  className="form-control"
                  placeholder="Enter task name"
                  value={task.name}
                  onChange={setTaskName}
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="start-date" className="form-label">Start Date:</label>
                  <input
                    type="date"
                    id="start-date"
                    className="form-control"
                    placeholder="Start date"
                    value={task.start_date}
                    onChange={setStartDate}
                  />
                </div>
                <div className="col">
                  <label htmlFor="end-date" className="form-label">End Date:</label>
                  <input
                    type="date"
                    id="end-date"
                    className="form-control"
                    placeholder="End date"
                    value={task.end_date}
                    onChange={setEndDate}
                  />
                </div>
              </div>
              <div className="col mb-3">
                <label htmlFor="task-priority" className="form-label">Priority</label>
                <select
                  className="form-control"
                  value={task.priority}
                  onChange={setPriority}
                >
                  <option value={1}>HIGH</option>
                  <option value={2}>MEDIUM</option>
                  <option value={3}>LOW</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewTaskModal