import { useState, useRef } from 'react';
import './Post.scss';

import CommentList from '../comment_list/Comment_List';
import CommentForm from '../comment_form/Comment_Form';

const Post = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const createComment = comment => {
    const newComment = {
      comment,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newComment, ...data]);
  };

  return (
    <li>
      <article className="post-1">
        <header className="post-header">
          <div className="writer-img" />
          <h2>Pulan</h2>
          <button type="button">
            <i className="fa-solid fa-ellipsis" />
          </button>
        </header>
        <div className="post-img" />
        <footer className="post-footer">
          <div className="post-btns">
            <div className="btns-likes">
              <i className="likeMenu3 fa-regular fa-heart" />
              <i className="likeMenu3 fa-regular fa-comment" />
              <i className="likeMenu3 fa-regular fa-share-from-square" />
            </div>
            <i className="fa-regular fa-bookmark" />
          </div>
          <div className="post-comments">
            <ol>
              <CommentList commentList={data} />
            </ol>
            <CommentForm createComment={createComment} />
          </div>
        </footer>
      </article>
    </li>
  );
};

export default Post;
