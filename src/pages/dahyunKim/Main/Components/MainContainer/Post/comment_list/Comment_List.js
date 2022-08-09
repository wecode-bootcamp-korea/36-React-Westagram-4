import CommentItem from './Comment_Item';
import './list.scss';

const CommentList = ({
  userName,
  commentList,
  removeComment,
  updateComment,
}) => {
  return (
    <>
      {commentList.map(item => (
        <CommentItem
          key={item.id}
          userName={userName}
          {...item}
          removeComment={removeComment}
          updateComment={updateComment}
        />
      ))}
    </>
  );
};

export default CommentList;
