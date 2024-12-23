import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function RegisterIndex() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`Username: ${username}\nPassword: ${password}`)
    navigate('/')
  }

  const alreadyHaveAndAccount = () => {
    navigate('/')
  }

  return (
    <div className="container mt-3">
      <h2 className="text-primary">Register</h2>
      <form onSubmit={onRegister}>
        <div className="col mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="form-control"
            value={fullName}
            onChange={onFullNameChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            value={username}
            onChange={onUsernameChange}
            placeholder="Enter your username"
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
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Register</button>
        <button
          type="button"
          className="nav-link"
          onClick={alreadyHaveAndAccount}>
          Already have an Account
        </button>
      </form>
    </div>
  )
}

export default RegisterIndex