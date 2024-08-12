import logo from '../assets/logo.png';

function Resetpassword() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-2 p-md-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" width="72" height="72" />
          <h1 className="h4 mt-3">
            Set <span className="purple">New Password</span>
          </h1>
        </div>
        <form action="" method="post" className="set-new-password-form">
          <div className="form-group mb-3">
            <label htmlFor="new-password" className="sr-only">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="form-control"
              placeholder="New Password"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit" id="confirm" className="fs-6 btn btn-purple btn-block custom-button">
            Set New Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
