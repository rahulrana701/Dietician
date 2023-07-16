import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/signup.css";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';


export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      distance: '120px',
      duration: 1100,
    });

    sr.reveal('.signupform form', { delay: 300, origin: 'top' });
    return () => {
      sr.destroy();
    };
  }, []);



  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://dietician-pi8g.onrender.com/api/v1/user/signup`, {
      // const response = await fetch(`http://localhost:5000/api/v1/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem('token', data.token);
      navigate('/');
    } else {
      alert("Invalid credentials");
    }

  };

  return (
    <>
      <div className="signup">
        <div className="signupform">
          <form onSubmit={handleSubmit}>
            <h1>SIGN <span>UP</span> </h1>
            <input
              type="name"
              name="name"
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='ENTER YOUR NAME'
            />
            <input
              type="email"
              name="email"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='ENTER THE EMAIL'
            />
            <input
              type="password"
              name="password"
              id="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='ENTER THE PASSWORD'
            />
            <button type="submit">SUBMIT</button>
            <p>
              Already have an account! <Link className='loginbutton' to="/login">LOGIN</Link> &#8594;
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
