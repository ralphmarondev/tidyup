import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function LoginIndex() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`Username: ${username}\nPassword: ${password}`)
    navigate('/home')
  }

  const createNewAccount = () => {
    navigate('/register')
  }

  return (
    <div className="container mt-3">
      <h2>Login</h2>
      <form onSubmit={onLogin}>
        <div className="col mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={username}
            onChange={onUsernameChange}
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="form-control"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Login</button>
        <button
          type="button"
          className="nav-link"
          onClick={createNewAccount}>
          Create an Account
        </button>
      </form>
    </div>
  )
}

export default LoginIndex