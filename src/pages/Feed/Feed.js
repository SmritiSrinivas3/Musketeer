import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../utils/firebase'


function Feed() {
  const [authDone, setAuthStatus] = useState()
  const auth = getAuth(app)
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus(user);
      } else {
        navigate("/");
      }
    });
  }, []);
 
  return (
    <div className='feedContainer'>
     
      
    </div>
  )
}

export default Feed
