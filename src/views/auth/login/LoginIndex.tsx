import React, {useState} from "react";

function LoginIndex() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`Username: ${username}\nPassword: ${password}`)
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default LoginIndex