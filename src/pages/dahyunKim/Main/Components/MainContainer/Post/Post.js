import { useState, useRef } from 'react';

import CommentList from './comment_list/Comment_List';
import CommentForm from './comment_form/Comment_Form';
import './Post.scss';

const Post = ({ userName, imgUrl, comment }) => {
  const [commentData, setCommentData] = useState(comment);

  const dataId = useRef(commentData.length);

  const createComment = content => {
    dataId.current += 1;
    const newComment = {
      id: dataId.current,
      content,
    };
    setCommentData([newComment, ...commentData]);
  };

  const removeComment = itemId => {
    setCommentData(commentData.filter(item => item.id !== itemId));
  };

  const updateComment = (itemId, updatedContent) => {
    setCommentData(
      commentData.map(item =>
        item.id === itemId ? { ...item, content: updatedContent } : item
      )
    );
  };

  return (
    <li className="post">
      <article>
        <header className="post-header">
          <div className="writer-img" />
          <h2>{userName}</h2>
          <button type="button">
            <i className="fa-solid fa-ellipsis" />
          </button>
        </header>
        <div
          className="post-img"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
        <footer className="post-footer">
          <div className="post-btns">
            <div className="btns-likes">
              <i className="likeMenu3 fa-regular fa-heart" />
              <i className="likeMenu3 fa-regular fa-comment" />
              <i className="likeMenu3 fa-regular fa-share-from-square" />
            </div>
            <i className="fa-regular fa-bookmark" />
          </div>
          <div className="introduce">
            <p>Hello</p>
          </div>
          <div className="post-comments">
            <ol>
              <CommentList
                userName={userName}
                commentList={commentData}
                removeComment={removeComment}
                updateComment={updateComment}
              />
            </ol>
            <CommentForm createComment={createComment} />
          </div>
        </footer>
      </article>
    </li>
  );
};

export default Post;
