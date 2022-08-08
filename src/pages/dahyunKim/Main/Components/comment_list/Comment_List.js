import './list.scss';
import CommentItem from './Comment_Item';

const CommentList = ({ commentList, removeComment, updateComment }) => {
  return (
    <>
      {commentList.map(item => (
        <CommentItem
          key={item.id}
          {...item}
          removeComment={removeComment}
          updateComment={updateComment}
        />
      ))}
    </>
  );
};

export default CommentList;
