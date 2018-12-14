import React from 'react'

const LoginForm = ({login, handleText}) => {
  return (
    <div>
      Login
      <form method="POST" onSubmit={login}>
      <p>
        Email:
        <input type="email" name="email" placeholder="Email..." onChange={handleText}/>
      </p>
      <p>
        Password:
        <input type="password" name="password" placeholder="Password..." onChange={handleText}/>
      </p>
      <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
