import React, { useState } from "react";
import loginLogo from "../assets/loginLogo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../db/db";
import LogOut from "./LogOut"; // Import LogOut component

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    reset(); // Reset the form fields when toggling between login and signup
    setErrorMessage(""); // Clear error messages
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const signupme = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up:", user);
        document.getElementById("my_modal_3").close();
        setEmail("");
        setPassword("");
        setErrorMessage(""); // Clear error messages
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Sign-up error:", errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  const signinme = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        document.getElementById("my_modal_3").close();
        setErrorMessage(""); // Clear error messages
      })
      .catch((error) => {
        console.error("Sign-in error:", error.message);
        setErrorMessage(error.message);
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
        setShowForgotPassword(false);
        setEmail(""); // Clear email field
        setErrorMessage(""); // Clear error messages
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Forgot password error:", errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <button
        className="btn bg-black border-spacing-2"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-[24rem]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex justify-center">
            <img
              className="max-w-32 max-h-32"
              src={loginLogo}
              alt="Login Illustration"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            {isLogin ? "Hello, Welcome Back!" : "Create Your Account"}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            {isLogin ? (
              <>
                <div className="mb-4">
                  <label className="flex items-center bg-gray-100 rounded-md p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      {...register("username")}
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-100 outline-none w-full"
                      required
                    />
                  </label>
                </div>

                <div className="mb-4">
                  <label className="flex items-center bg-gray-100 rounded-md p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-100 outline-none w-full"
                      required
                    />
                  </label>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-500"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={signinme}
                  className="w-full bg-pink-600 text-white py-2 rounded-md mb-4"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="flex items-center bg-gray-100 rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-100 pl-2 outline-none w-full"
                      required
                    />
                  </label>
                </div>

                <div className="mb-4">
                  <label className="flex items-center bg-gray-100 rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-100 outline-none w-full"
                      required
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="flex items-center bg-gray-100 rounded-md p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      {...register("confirmPassword")}
                      type="password"
                      placeholder="Confirm Password"
                      className="bg-gray-100 outline-none w-full"
                      required
                    />
                  </label>
                </div>
                <button
                  className="w-full bg-pink-600 text-white py-2 rounded-md mb-4"
                  onClick={signupme}
                >
                  Sign Up
                </button>
              </>
            )}
          </form>

          {showForgotPassword && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-4">Forgot Password</h3>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 pl-2 outline-none w-full mb-4"
              />
              <button
                onClick={handleForgotPassword}
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                Send Password Reset Email
              </button>
              <button
                onClick={() => setShowForgotPassword(false)}
                className="w-full bg-gray-300 text-black py-2 rounded-md mt-2"
              >
                Back to Login
              </button>
            </div>
          )}

          <p className="text-center">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  className="text-blue-500 font-semibold"
                  onClick={toggleForm}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-500 font-semibold"
                  onClick={toggleForm}
                >
                  Login
                </button>
              </>
            )}
          </p>

          {/* Conditionally render LogOut button if user is logged in */}
          {false /* Replace with actual condition to check if user is logged in */ && (
            <LogOut />
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Login;
