import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  const [hasValue, setHasValue] = useState(false);
  const handleInputChange = () => setHasValue(true);

  return (
    <header className="main-header">
      <div className="header-group">
        <div className="logo-group">
          <Link to="#" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <i className="fa-brands fa-instagram" />
          </Link>
          <h1 className="logo-title">
            <Link
              to="#"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Instagram
            </Link>
          </h1>
        </div>
        <div className="search-group">
          {hasValue ? null : <i className="fa-solid fa-magnifying-glass" />}
          <input
            className="search-bar"
            type="text"
            placeholder="검색"
            onChange={handleInputChange}
          />
        </div>
        <nav className="nav-group">
          <Link to="#">
            <img src="images/dahyunKim/explore.png" alt="탐색" />
          </Link>
          <Link to="#">
            <img src="images/dahyunKim/heart.png" alt="좋아하는 페이지" />
          </Link>
          <Link to="#">
            <img src="images/dahyunKim/profile.png" alt="유저 프로필" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
