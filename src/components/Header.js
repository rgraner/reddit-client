import React, { useState } from 'react';
import logo from '../images/reddit-c_logo.png';

export const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header>
      <div className='header-container'>
        <img src={logo} alt="Logo" />
        <input type="text" placeholder="Search Reddit" value={searchTerm} onChange={handleSearch} />
      </div>
    </header>
  );
};
