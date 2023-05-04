import React, { useContext, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // State
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle registation
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // Making error and success message blank
    setError("");
    setSuccess("");
    createUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        setSuccess("Registration completed successfully");
        updateUserData(registeredUser, name, photoUrl);
        form.reset();
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  // Update user data
  const updateUserData = (registeredUser, name, photoUrl) => {
    updateProfile(registeredUser, { displayName: name, photoURL: photoUrl })
      .then(() => {
        setSuccess("Profile updated");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="bg-[#002C41] w-[1615px] h-screen flex justify-center items-center">
      <div className="w-[550px] bg-[#011D29] py-14 px-8 box-border rounded-lg text-white">
        <h3 className="text-center text-4xl font-semibold mb-8 text-[#fd6656]">
          Please! Register Here
        </h3>
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="text-lg inline-block w-24" htmlFor="">
              Name
            </label>
            <input
              className="w-9/12 ml-5 px-3 py-2 outline-none rounded bg-transparent border"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          {/* Photo url */}
          <div className="mb-4">
            <label className="text-lg inline-block w-24" htmlFor="">
              Photo URL
            </label>
            <input
              className="w-9/12 ml-5 px-3 py-2 outline-none rounded bg-transparent border"
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              required
            />
          </div>
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
              required
            />
          </div>
          <button
            className="px-5 py-2 bg-[#fd6656] hover:bg-transparent border border-[#fd6656] rounded w-full mt-4 text-lg font-semibold tracking-wider"
            type="submit"
          >
            Register
          </button>

          <p className="mt-4 tracking-wider">
            <small>
              Already registered? Go to
              <Link className="text-decoration-none text-green-200" to="/login">
                <span> Login </span>
              </Link>
              page
            </small>
          </p>
          {error && <p className="text-red-500">{error}</p>}
          {user && !error && <p className="text-green-200">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
