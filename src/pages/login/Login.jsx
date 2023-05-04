import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, login, signInWithGoogle, signInGithub } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    //Getting data from login form
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, "from login page");

    // Reset the existing error message
    setError("");
    setSuccess("");
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("Login successful");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        setSuccess("Successfully Signed In with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGitSignIn = () => {
    signInGithub()
      .then(() => {
        setSuccess("Successfully signed in with Github");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="bg-[#002C41] w-[1632px] h-screen flex justify-center items-center">
      <div className="w-[550px] bg-[#011D29] py-14 px-8 box-border rounded-lg text-white">
        <h3 className="text-center text-4xl font-semibold mb-8 text-[#fd6656]">
          Please! Login Here
        </h3>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="text-lg inline-block w-24" htmlFor="">
              Email
            </label>
            <input
              className="w-9/12 ml-5 px-3 py-2 outline-none rounded bg-transparent border"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label className="text-lg inline-block w-24" htmlFor="">
              Password
            </label>
            <input
              className="w-9/12 ml-5 px-3 py-2 outline-none rounded bg-transparent border"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider">
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider"
        >
          Login with Google
        </button>
        <button
          onClick={handleGitSignIn}
          className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider"
        >
          Login with GitHub
        </button>
        <p className="mt-4 tracking-wider">
          <small>
            Not registered yet? Please
            <Link className="text-decoration-none text-green-200" to="/register">
              <span> Register </span>
            </Link>
          </small>
        </p>
        {error && <p className="text-red-500">{error}</p>}
        {user && !error && <p className="text-green-200">{success}</p>}
      </div>
    </div>
  );
};

export default Login;
