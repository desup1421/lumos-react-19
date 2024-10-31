import React from "react";

const LoginModal = ({ isLogin, toggleLogin, handleChange, handleSubmit, error,loading, form }) => {
  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
          </div>
          <div className="modal-body">
						{error && <div className="alert alert-danger"><i className="bi bi-excalamation-danger"></i>{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
				  				name="username"
									value={form.username}
				  				onChange={handleChange}
                  required
									disabled={loading}
                  minLength="6"
                  maxLength="30"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
									name="password"
									value={form.password}
									onChange={handleChange}
                  required
									disabled={loading}
                />
              </div>

              <button
								disabled={loading}
                type="submit"
                className="btn btn-primary w-100 mt-2 fw-bold"
              >
                <i className="bi bi-shield-lock"></i>{" "}
                {isLogin ? "Login" : "Register"}
              </button>

              <button
								disabled={loading}
                type="button"
                onClick={toggleLogin}
                className="btn btn-link w-100 mt-3 text-decoration-none"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
