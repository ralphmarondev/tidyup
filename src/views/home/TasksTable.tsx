import {useState} from 'react'

interface TaskType {
  id: number;
  name: string,
  start: string,
  end: string,
  priority: string,
  status: string
}

function TasksTable() {
  const tasks: TaskType[] = [
    {
      id: 1,
      name: 'Eat',
      start: '7:23AM',
      end: '2:00PM',
      priority: 'HIGH',
      status: 'PENDING'
    },
    {
      id: 2,
      name: 'Sleep',
      start: '8:03PM',
      end: '6:00AM',
      priority: 'HIGH',
      status: 'PENDING'
    }
  ]
  const [searchTask, setSearchTask] = useState('')

  const onSearchTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value)
  }

  return (
    <>
      <div className="row mb-3 w-100">
        <div className="col">
          <input
            type="search"
            className="form-control"
            value={searchTask}
            onChange={onSearchTaskChange}
            placeholder="Search task"/>
        </div>
        <div className="col text-end">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#newTaskModal">
            New Task
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
        <tr>
          <th className="col-md-4">Task Name</th>
          <th className="col-md-2 text-center">Start</th>
          <th className="col-md-2 text-center">End</th>
          <th className="col-md-1 text-center">Priority</th>
          <th className="col-md-1 text-center">Status</th>
          <th className="col-md-2 text-center">Action</th>
        </tr>
        </thead>
        <tbody>
        {
          tasks.map((task: TaskType) => (
            <tr key={task.id}>
              <th>{task.name}</th>
              <th className="text-center">{task.start}</th>
              <th className="text-center">{task.end}</th>
              <th className="text-center">{task.priority}</th>
              <th className="text-center">{task.status}</th>
              <th className="text-center">
                <button className="btn btn-success btn-sm m-1" type="button">Update</button>
                <button className="btn btn-danger btn-sm m-1" type="button">Delete</button>
              </th>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}

export default TasksTable