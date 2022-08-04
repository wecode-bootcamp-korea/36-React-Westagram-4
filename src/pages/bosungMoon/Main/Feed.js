import React from 'react';
import './feed.scss';

const Feed = () => {
  return (
    <div className="centerFrame">
      <div className="feedsheader">
        <div className="headerMe">
          <img src="images/me.jpeg" alt="나" />
          <p>haydemMoon127</p>
        </div>
        <img src="images/more.png" alt="more" />
      </div>
      <img className="travel" src="images/travel.jpeg" alt="나" />
      <div>
        <div className="feedMiddle">
          <div>
            <img src="images/heart.png" alt="love" />
            <img src="images/chat.png" alt="chat" />
            <img src="images/upload.png" alt="share" />
          </div>
          <img src="images/bookmark.png" alt="bookmark" />
        </div>
      </div>
      <div className="feedMiddleMiddle">
        <img src="images/f45.jpeg" alt="나" />
        <div className="leftBottomBottom">
          <p>
            <span>anieworl</span>님 <span>외 342명</span>이 좋아합니다
          </p>
        </div>
      </div>
      <div className="commentBottom">
        <div className="feedMiddleComment">
          <p>
            <span className="commentId">yrc_running_crew</span> 위워크는
            어떠신가요?
            <span className="commentGray">... 더 보기</span>
          </p>
        </div>
        <div className="feedMiddleComment">
          <p>
            <span className="commentId">yr_yeouido_crew</span> 힘내요 화이팅!👍
          </p>
        </div>
      </div>
      <div className="commentBar">
        <input id="commentPlz" type="text" placeholder="댓글 달기..." />
        <button id="post">게시</button>
      </div>
    </div>
  );
};

export default Feed;
