import { useState } from 'react';
import AddComment from './AddComment';

const Comment = ({ data, likeHandler, replyHandler }) => {
  let [showReply, setShowReply] = useState(false);

  const toggleShowReply = () => {
    setShowReply((prevState) => !prevState);
  };

  const addComment = (reply) => {
    replyHandler({
      user: 'nam',
      comment: reply,
      likes: 0,
      hasLiked: false,
    });
    toggleShowReply();
  };
  return (
    <div>
      {/* {console.log(data)} */}
      <p>{data.user}</p>
      <p>{data.comment}</p>
      <p>{data.likes}</p>
      <button onClick={likeHandler}>Like</button>
      {/* <button onClick={toggleShowReply}>Reply</button> */}

      {showReply ? (
        <AddComment closeHandler={toggleShowReply} addCommentHandler={addComment} />
      ) : (
        <button onClick={toggleShowReply}>Reply</button>
      )}
    </div>
  );
};

export default Comment;
