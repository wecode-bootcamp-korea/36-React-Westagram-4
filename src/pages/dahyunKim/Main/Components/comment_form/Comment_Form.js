import { useState } from 'react';

import './form.scss';

const CommentForm = ({ createComment }) => {
  const [comment, setComment] = useState('');

  const updateState = ({ target }) => setComment(target.value);

  const submitButton = e => {
    e.preventDefault();

    createComment(comment);
    setComment('');
  };

  return (
    <form className="post-form">
      <input
        name="comment"
        value={comment}
        type="text"
        placeholder="댓글 달기..."
        autoComplete="off"
        onChange={updateState}
      />
      <button onClick={submitButton} type="submit">
        게시
      </button>
    </form>
  );
};

export default CommentForm;
