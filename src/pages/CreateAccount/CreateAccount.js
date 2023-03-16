import './CreateAccount.css'
import React, { useContext, useState } from 'react'
import { BaseContext } from '../../utils/baseContext'
import { AuthContext } from '../../utils/AuthContext'

function CreateAccount() {
    const firebaseContext = useContext(BaseContext)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }
    
    async function signUp(){
        await firebaseContext.signUserUp(email,password)
    }
  return (
    <div className='createAccountContainer'>
      <h1>CREATE AN ACCOUNT</h1>
      <p>Already a member? Click <a href='#'>here</a> to Log-in</p>
      <form className='createAccForm'>
      <h4> First Name: </h4><input type="text" id='firstName' value={firstName} onChange = {(e) => handleInputChange(e)} className='inputField'></input>
      <h4> Second Name: </h4><input type="text" id='lastName' value={lastName} onChange = {(e) => handleInputChange(e)} className='inputField'></input>
      <h4> Email: </h4><input type="email" id='email' value={email} onChange = {(e) => handleInputChange(e)} className='inputField'></input>
      <h4> Password: </h4><input type="password" id='password' value={password} onChange = {(e) => handleInputChange(e)} className='inputField'></input>
     <div className="subButton">
        <input onClick={()=>signUp()} type='submit'></input>
     </div>
      </form>
    </div>
  )
}

export default CreateAccount
