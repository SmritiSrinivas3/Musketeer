import React, { useState, useEffect } from "react";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";
import './Searchbar.css'
import { db } from "../../utils/firebase";

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const q = query(collection(db, "userData"), where("firstName", "array-contains", searchQuery));
      getDocs(q).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSearchResults(data);
        console.log(data)
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div>
    <input type="text" value={searchQuery} id='searchInputField' onChange={handleInputChange} />
    <ul>
      {searchResults.map((result) => (
        <li key={result.id}>{result.firstName} {result.lastName}</li>
      ))}
    </ul>
  </div>
  );
};

export default SearchBar;
