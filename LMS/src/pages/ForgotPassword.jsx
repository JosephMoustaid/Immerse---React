import logo from '../assets/logo.png';

function ForgotPassword() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-2 p-md-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" width="72" height="72" />
          <h1 className="h4 mt-3">
            Forgot <span className="purple">Password</span>
          </h1>
        </div>
        <form action="" method="post" className="forgot-password-form px-4">
          <div className="form-group mb-3">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
              autoFocus
            />
          </div>
          <button type="submit" id="confirm" className="fs-6 btn btn-purple btn-block custom-button">
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="sign-in" className="text-muted">
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
