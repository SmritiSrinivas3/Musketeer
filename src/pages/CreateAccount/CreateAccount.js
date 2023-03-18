import './CreateAccount.css'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../utils/firebase'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../utils/firebase';
import {  collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';





function CreateAccount() {
    const storage = getStorage(app);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [profilePhoto, setProfilePhoto] = useState(null)
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
        if(id === 'profilePhoto'){
            setProfilePhoto(e.target.files[0]);
        }
    }
    
    const createUser = async() =>{
        const storageRef = ref(storage, profilePhoto.name)
        const snapshot = await uploadBytes(storageRef, profilePhoto);
        const downloadURL = await getDownloadURL(snapshot.ref);
        await addDoc(collection(db, "userData"), {email: email, firstName: firstName, lastName: lastName, password:password, profilePhoto: downloadURL})
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
                if (errorCode === 'auth/email-already-in-use') {
                    alert('An account with this email address already exists. Please sign in instead.');
                    navigate('/login')
                  }
                  else{
                    alert(errorMessage)
                  }
            });
        

  
    }

    return (
        <div className='createAccountContainer'>
            <h1>CREATE AN ACCOUNT</h1>
            <p>Already a member? Click <Link to='/login'>here</Link> to Log-in</p>
            <form className='createAccForm' onSubmit={(e) => handleSubmit(e)}>
                <h4> First Name: </h4><input type="text" id='firstName' required={true} value={firstName} onChange={(e) => handleInputChange(e)} className='inputFieldCrt'></input>
                <h4> Last Name: </h4><input type="text" id='lastName' value={lastName} onChange={(e) => handleInputChange(e)} className='inputFieldCrt'></input>
                <h4> Email: </h4><input type="email" id='email' required={true} value={email} onChange={(e) => handleInputChange(e)} className='inputFieldCrt'></input>
                <h4> Password: </h4><input type="password" required={true} id='password' value={password} onChange={(e) => handleInputChange(e)} className='inputFieldCrt'></input>
               <br/> <br/>
               Upload Profile Photo: <input type="file"  id='profilePhoto' onChange={(e) => handleInputChange(e)} accept=".jpg,.jpeg,.png" />
                <div className="subButtonCrt">
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount
