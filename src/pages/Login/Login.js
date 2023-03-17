import React, { useState } from 'react'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleInputChange = (e) => {
        const { id, value } = e.target   // array destructuring
        if (id == 'email') {
            setEmail(value)
        }
        if (id == 'password') {
            setPassword(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/feed')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Incorrect password, please try again');
      } else {
        console.log(error.message);
      }
  });
    }
    return (
        <div className='loginContainer'>
            <div className="loginBox">
                <h1>LOGIN</h1>
                <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>

                    <h4>Email: </h4>  <input type='email' id='email' required={true} value={email} onChange={(e) => handleInputChange(e)} className='inputField'></input>
                    <br /><br /><br />
                    <h4> Password: </h4> <input type='password' id='password' required={true} onChange={(e) => handleInputChange(e)} value={password} className='inputField'></input>
                    <div className="subButton">
                        <input type='submit'></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
