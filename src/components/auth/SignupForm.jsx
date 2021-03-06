import React from 'react'

const SignupForm = ({signup, handleText}) => {
  return (
    <div className="container">
      Login
      <form method="POST" onSubmit={signup}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Nombre</span>
        </div>
        <input type="text" name="name" className="form-control" placeholder="Nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" name="email" className="form-control" placeholder="Email..." aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Password</span>
        </div>
        <input type="password" name="password" className="form-control" placeholder="Password..." aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default SignupForm
