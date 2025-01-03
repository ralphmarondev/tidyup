import {useEffect, useState} from 'react'
import axiosInstance from '../../api/axiosInstance.ts'

interface TaskType {
  id: number;
  name: string,
  start: string,
  end: string,
  priority: string,
  status: string
}

function TasksTable() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [searchTask, setSearchTask] = useState('')

  // fetch task ^^
  useEffect(() => {
    const fetchTasks = () => {
      axiosInstance.get('tasks/')
        .then(response => {
          const fetchTasks = response.data.map((task: any) => ({
            id: task.id,
            name: task.name,
            start: task.start_date,
            end: task.end_date,
            priority: task.priority === 1 ? 'HIGH' : 'LOW',
            status: task.status === 1 ? 'PENDING' : 'COMPLETED'
          }))
          setTasks(fetchTasks)
        })
        .catch(error => {
          console.error(`Error: ${error}`)
        })
    }
    fetchTasks()
  }, [])

  const onSearchTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTask(e.target.value)
  }

  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTask.toLowerCase()))

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
          filteredTasks.map((task: TaskType) => (
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