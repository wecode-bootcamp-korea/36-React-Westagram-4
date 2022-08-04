import React from 'react';
import './Main.scss';
import Feed from './Feed';
import RightFeed from './RightFeed';

const Main = () => {
  return (
    <>
      <nav className="top">
        <div className="instatopleft">
          <div className="mainBorder">
            <img
              className="instaTopImgInsta"
              src="images/instagram.png"
              alt="인스타"
            />
          </div>
          <div className="maintitle">
            <h1>westagram</h1>
          </div>
        </div>
        <div className="barBorder">
          <img className="search" src="images/search.png" alt="서치" />
          <input type="text" id="searchbar" placeholder="검색" />
        </div>
        <div className="imgRightTop">
          <img
            className="instaTopImgExplore"
            src="images/explore.png"
            alt="탐색"
          />
          <img className="instaTopImgHeart" src="images/love.png" alt="하트" />
          <img
            className="instaTopImgMypage"
            src="images/mapage.png"
            alt="마이페이지"
          />
        </div>
      </nav>

      <div className="main">
        <Feed />
        <RightFeed />
      </div>
    </>
  );
};

export default Main;
