import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '120px',
            duration: 1100,
        });

        sr.reveal('.loginform form', { delay: 300, origin: 'top' });
        return () => {
            sr.destroy();
        };
    }, []);

    const handlesubmit2 = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/v1/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.token);
            navigate('/');
        }
        else {
            alert("invalid credentials")
        }
    }
    return (
        <>
            <div id="login">
                <div className="loginform">
                    <div className="loginformimg">

                    </div>
                    <form action="" onSubmit={handlesubmit2}>
                        <h1>LOG <span>IN</span> </h1>
                        <input type="email" name="email" id="email-logininput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='ENTER THE EMAIL' />
                        <input type="password" name="password" id="password-logininput" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='ENTER THE PASSWORD' />
                        <button type="submit">SUBMIT</button>
                        <p>
                            Don't have an account! <a className='signupbutton' href="/signup">SIGN UP</a> &#8594;
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
