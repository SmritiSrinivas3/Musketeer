import React, { useEffect, useState } from 'react'
import './SideProfile.css'
import { collection, where, getDocs, query, QuerySnapshot } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { db } from "../../utils/firebase"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../utils/firebase'

function SideProfile() {

  const [authDone, setAuthStatus] = useState()
  const auth = getAuth(app)
  const[currentUser, setCurrentUser] = useState(null)
  const[data, setData] = useState(null)
  const navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus(user);
        setCurrentUser(user)
      } else {
        navigate("/");
      }
    });
  }, []);


  function handleSignOut(){
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      alert(error.message)
    });
  }

  useEffect(() => {
    if (currentUser) {
      const usersRef = collection(db, "userData");
      const q = query(usersRef, where('email', '==', currentUser.email));
getDocs(q)
.then((querySnapshot)=>{
  querySnapshot.forEach((doc) =>{
  if(doc.exists()) setData(doc.data())
  })
})
.catch((error)=>{console.log(error.message)})
    }
  }, [currentUser]);

  console.log(data)

  return (
    <div className='sideProfileContainer'>
      {data && (
        <div>
          <img src={data.profilePhoto}></img>
          <h4>{data.firstName} {data.lastName}</h4>
          <h6>{data.email}</h6>
        </div>
      )}
      <button className='sideProfileButtons'>EDIT PROFILE</button> <br/>
     <button className='sideProfileButtons' onClick={handleSignOut} >SIGN OUT</button>
    </div>
  )
}

export default SideProfile
