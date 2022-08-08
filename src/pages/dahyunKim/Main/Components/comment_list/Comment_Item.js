const CommentItem = ({ id, comment, removeComment, updateComment }) => {
  const removeOnClick = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      removeComment(id);
    }
  };

  const updateOnClick = () => {
    const updatedContent = prompt('내용을 수정하세요.', comment);
    updateComment(id, updatedContent);
  };

  return (
    <li className="comment">
      <div className="contents">
        <span className="userId">Pulan</span>
        <span className="content">{comment}</span>
      </div>
      <div className="btns">
        <button className="updateContent" onClick={updateOnClick}>
          수정
        </button>
        <button className="removeContent" onClick={removeOnClick}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
