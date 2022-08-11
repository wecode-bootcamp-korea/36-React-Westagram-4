import React, { useState, useEffect } from 'react';
import './Main.scss';
import Feed from './Feed';
import RightFeed from './RightFeed';

const MainBosung = () => {
  const [feedDataList, setFeedDataList] = useState([]);
  useEffect(() => {
    fetch('/data/FeedMockData.json')
      .then(response => response.json())
      .then(result => setFeedDataList(result));
  }, []);

  return (
    <>
      <nav className="top">
        <div className="instatopleft">
          <div className="mainBorder">
            <img
              className="instaTopImgInsta"
              src="images/bosungMoon/instagram.png"
              alt="인스타"
            />
          </div>
          <div className="maintitle">
            <h1>westagram</h1>
          </div>
        </div>
        <div className="barBorder">
          <img
            className="search"
            src="images/bosungMoon/search.png"
            alt="서치"
          />
          <input type="text" id="searchbar" placeholder="검색" />
        </div>
        <div className="imgRightTop">
          <img
            className="instaTopImgExplore"
            src="images/bosungMoon/explore.png"
            alt="탐색"
          />
          <img
            className="instaTopImgHeart"
            src="images/bosungMoon/love.png"
            alt="하트"
          />
          <img
            className="instaTopImgMypage"
            src="images/bosungMoon/mapage.png"
            alt="마이페이지"
          />
        </div>
      </nav>

      <div className="main">
        <div className="feeds">
          {feedDataList.map((result, i) => {
            const feed = feedDataList[i];
            return <Feed key={i} feed={feed} />;
          })}
        </div>
        <RightFeed />
      </div>
    </>
  );
};

export default MainBosung;
