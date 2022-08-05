import { useState, useRef } from 'react';

import './form.scss';

const CommentForm = ({ createComment }) => {
  const commentInput = useRef();

  const [state, setState] = useState({
    comment: '',
  });

  const updateState = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
      // comment: target.value,
    });
  };

  const submitButton = e => {
    e.preventDefault();
    if (state.comment.length < 5) {
      commentInput.current.focus();
      return;
    }

    createComment(state.comment);
    setState({
      comment: '',
    });
  };

  return (
    <form className="post-form">
      <input
        ref={commentInput}
        name="comment"
        value={state.comment}
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
