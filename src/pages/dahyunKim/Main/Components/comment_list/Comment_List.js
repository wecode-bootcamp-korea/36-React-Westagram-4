import './list.scss';
import CommentItem from './Comment_Item';

const CommentList = ({ commentList }) => {
  return (
    <>
      {commentList.map(item => (
        <CommentItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default CommentList;
