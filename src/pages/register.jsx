import React, { useRef, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../libs/firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate(); // Use useNavigate hook to get navigate function

  useEffect(() => {
    // Set the document title to "Login"
    document.title = 'Register';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user', user);

      navigate('/dashboard'); // Use navigate function for redirection
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <h1>Register</h1>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" required ref={emailRef} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" required ref={passwordRef} />
          </div>
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>

      {errorMessage && <p className='badge text-bg-danger'>{errorMessage}</p>}
    </form>
  );
};

export default Register;
