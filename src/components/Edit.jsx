const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
  cancelPost,
}) => {
  return (
    <div className="container my-3">
      <form className="w-50 mx-auto">
        <h1>Edit Post</h1>
        <input
          className="form-control"
          type="text"
          defaultValue={title}
          onChange={saveTitleToState}
          placeholder="title"
        />
      <br/>
      <br/>
        <textarea
        className="form-control"
          onChange={saveContentToState}
          defaultValue={content}
          placeholder="contents"
        ></textarea>
        <br />
        <br />
        <button className="btn btn-primary me-3" onClick={updatePost}>Update Post</button>
        <button className="btn btn-danger me-3" onClick={cancelPost}>Cancel Post</button>
      </form>
    </div>
  );
};
export default Edit;
