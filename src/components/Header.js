import React, { useState } from 'react';

export const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <input type="text" placeholder="Search Reddit" value={searchTerm} onChange={handleSearch} />
    </header>
  );
};