import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="commentBottom">
      <div className="feedMiddleComment">
        <p>
          <span className="commentId">haydenmoon127</span>
          <span> {comment}</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
