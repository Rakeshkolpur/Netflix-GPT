import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handlebuttonclick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (!isSignIn) {
      //sing up / sign in logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential?.user;
          
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/162539805?s=96&v=4",
          })
            .then(() => {
               const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                       addUser({
                         uid: uid,
                         email: email,
                         displayName: displayName,
                         photoURL: photoURL,
                       })
                     );
              
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.msg);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    }
  };
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
        alt="Netflix Background"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-8 rounded-lg w-1/3"
      >
        <h1 className="text-3xl text-white font-bold p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="mb-4">
            <input
              ref={name}
              type="text"
              className="p-4 m-2 w-full bg-transparent text-white border-2 border-white"
              placeholder="Enter your name"
            />
          </div>
        )}
        <div className="mb-4">
          <input
            ref={email}
            type="email"
            className="p-4 m-2 w-full bg-transparent text-white border-2 border-white"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-4">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-full bg-transparent text-white border-2 border-white"
          />
        </div>
        <p className="text-red-700 font-bold text-sm">{errorMessage}</p>
        <button
          onClick={handlebuttonclick}
          className="p-4 m-4 w-full text-white font-bold bg-red-800 text-xl rounded"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h4 className="text-white text-center">OR</h4>
        <button className="p-4 m-4 w-full text-white font-bold bg-gray-500 bg-opacity-40 text-xl rounded">
          {isSignIn ? "Use a Sign-In Code" : "Use a Sign-Up Code"}
        </button>
        <span className="flex items-center mb-2 space-x-2">
          <input type="checkbox" className="flex w-4 h-4" />
          <label className="text-white font-bold text-sm">Remember Me</label>
        </span>
        <span className="text-white">
          {isSignIn ? (
            <>
              New to Netflix?{" "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-red-500"
              >
                Sign up now.
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={toggleForm}
                className="text-red-500"
              >
                Sign in now.
              </button>
            </>
          )}
        </span>
        <small className="text-white block">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#">Learn more.</a>
        </small>
      </form>
    </div>
  );
};

export default Login;
