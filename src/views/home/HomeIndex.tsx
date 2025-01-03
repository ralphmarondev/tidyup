import TasksTable from './TasksTable.tsx'
import NewTaskModal from './modals/NewTaskModal.tsx'

function HomeIndex() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img
              src="/assets/images/react.svg"
              alt="Tidy Up Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <span className="ms-2">Tidy Up</span>
          </a>
        </div>
      </nav>

      <div className="container mt-3">
        <TasksTable/>
      </div>

      <NewTaskModal/>
    </>
  )
}

export default HomeIndex