import React, { useState, useEffect } from "react";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import './Searchbar.css'
import { db } from "../../utils/firebase";

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const q = query(collection(db, "userData"), where("firstName", "==", searchQuery));
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSearchResults(data);
        
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
console.log(searchResults)
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div>
    <input type="text" value={searchQuery} id='searchInputField' onChange={handleInputChange} placeholder='Search (case sensitive)' />
   {searchQuery !== "" && searchResults.length>0 ? (
    <ul className='searchResultContainer'>
      {searchResults.map((result) => (
        <li key={result.id} className='individualResult'>
          <img className='searchResultPhoto'src={result.profilePhoto}></img>
          <h3>{result.firstName} {result.lastName}</h3>
          <button>VIEW PROFILE</button>
          </li>
      ))}
    </ul>
   ): searchQuery !== "" && searchResults.length == 0 ? <p> No such user exist</p>
   : null}
  </div>
  );
};

export default SearchBar;
