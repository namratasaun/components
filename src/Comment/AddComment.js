const AddComment = ({ closeHandler, addCommentHandler }) => {
  const submitHandler = (ev) => {
    ev.preventDefault();
    addCommentHandler(ev.target.comment.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name='comment' type='text' />
        <button>Post</button>
      </form>
      <button onClick={closeHandler}>Close</button>
    </div>
  );
};

export default AddComment;
