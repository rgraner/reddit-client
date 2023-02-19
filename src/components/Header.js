import React, { useState } from 'react';

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
        <div className="logo" onClick={handleLogoClick}>REDDIT<span>-C</span></div>
        <div className="header-right-side">
        <a href="https://github.com/rgraner/reddit-client" title="Github Reddit-Client"><i className="fa-brands fa-github"></i></a>
          <input type="text" placeholder="Search Reddit" value={searchTerm} onChange={handleSearch} />
        </div>
      </div>
    </header>
  );
};


