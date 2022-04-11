import React, {useRef} from 'react';
import {auth} from '../firebase';
import './SignIn.css';
const Signin = () => {
  // 2. create hooks
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // prevent page from refreshing
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 1. create the form first
  return (
    <div className="signin">
      <form action="">
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign in </button>
        <h6>
          Not yet register?{' '}
          <span onClick={signUp} className="signin__link">
            Sign up
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Signin;
