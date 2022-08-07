import React, { useState } from 'react';
import './feed.scss';
import Comment from './Comment';

const Feed = () => {
  const [comment, setComment] = useState('');

  const changeHandler = event => {
    setComment(event.target.value);
  };

  const [commentBox, setCommentBox] = useState([]);

  function plus(event) {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    let a = [...commentBox];
    a.push(comment);
    setCommentBox(a);
    setComment('');
  }

  const InputValue = comment.length >= 1;

  return (
    <div className="centerFrame">
      <div className="feedsheader">
        <div className="headerMe">
          <img src="images/bosungMoon/me.jpeg" alt="나" />
          <p>haydenMoon127</p>
        </div>
        <img src="images/bosungMoon/more.png" alt="more" />
      </div>
      <img className="travel" src="images/bosungMoon/travel.jpeg" alt="나" />
      <div>
        <div className="feedMiddle">
          <div>
            <img src="images/bosungMoon/heart.png" alt="love" />
            <img src="images/bosungMoon/chat.png" alt="chat" />
            <img src="images/bosungMoon/upload.png" alt="share" />
          </div>
          <img src="images/bosungMoon/bookmark.png" alt="bookmark" />
        </div>
      </div>
      <div className="feedMiddleMiddle">
        <img src="images/bosungMoon/f45.jpeg" alt="나" />
        <div className="leftBottomBottom">
          <p>
            <span>anieworl</span>님 <span>외 342명</span>이 좋아합니다
          </p>
        </div>
      </div>

      <Comment comment="힘내요 화이팅!👍" />
      <Comment comment="위워크는 어떠신가요?" />

      {commentBox.map((comment, i) => {
        return <Comment key={i} comment={comment} />;
      })}

      <div className="commentBar">
        <form>
          <input
            id="commentPlz"
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            onChange={changeHandler}
          />
          <button
            onClick={plus}
            className={InputValue ? 'post' : 'postDisabled'}
          >
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
