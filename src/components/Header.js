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
        <div className="header-right-side">
        <a href="https://github.com/rgraner/reddit-client" target="_blank" title="Github Profile"><i class="fa-brands fa-github"></i></a>
          <input type="text" placeholder="Search Reddit" value={searchTerm} onChange={handleSearch} />
        </div>
      </div>
    </header>
  );
};
