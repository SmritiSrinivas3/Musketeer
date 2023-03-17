import './CreateAccount.css'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { collection, addDoc } from "firebase/firestore"; 







function CreateAccount() {
    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }
    const createUser = async() =>{
        await addDoc(collection(db, "userData"), {email: email, firstName: firstName, lastName: lastName, password:password})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createUser();
                navigate('/feed');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        

  
    }

    return (
        <div className='createAccountContainer'>
            <h1>CREATE AN ACCOUNT</h1>
            <p>Already a member? Click <a href='#'>here</a> to Log-in</p>
            <form className='createAccForm' onSubmit={(e) => handleSubmit(e)}>
                <h4> First Name: </h4><input type="text" id='firstName' required={true} value={firstName} onChange={(e) => handleInputChange(e)} className='inputField'></input>
                <h4> Last Name: </h4><input type="text" id='lastName' value={lastName} onChange={(e) => handleInputChange(e)} className='inputField'></input>
                <h4> Email: </h4><input type="email" id='email' required={true} value={email} onChange={(e) => handleInputChange(e)} className='inputField'></input>
                <h4> Password: </h4><input type="password" required={true} id='password' value={password} onChange={(e) => handleInputChange(e)} className='inputField'></input>
                <div className="subButton">
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount
