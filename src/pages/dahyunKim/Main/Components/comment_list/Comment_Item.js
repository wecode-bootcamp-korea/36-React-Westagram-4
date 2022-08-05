const CommentItem = ({ comment }) => {
  return (
    <li className="comment">
      <span className="userId">Pulan</span>
      <span className="content">{comment}</span>
    </li>
  );
};

export default CommentItem;
