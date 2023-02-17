import React, { useState } from 'react';
import logo from '../images/reddit-c_logo.png';

export const Header = ({ onSearch, onLogoClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleLogoClick = event => {
    onLogoClick('popular');
  };

  return (
    <header>
      <div className='header-container'>
        <img src={logo} alt="Logo" onClick={handleLogoClick} />
        <div className="header-right-side">
        <a href="https://github.com/rgraner/reddit-client" title="Github Reddit-Client"><i className="fa-brands fa-github"></i></a>
          <input type="text" placeholder="Search Reddit" value={searchTerm} onChange={handleSearch} />
        </div>
      </div>
    </header>
  );
};


