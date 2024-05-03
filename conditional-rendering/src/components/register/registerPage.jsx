import React from "react";

export default function RegisterPage() {
  return (
    <div>
      <div className="container">
        <h2>Register From</h2>
        <form action="/action_page.php">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Re-Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
