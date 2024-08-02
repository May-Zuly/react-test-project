const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
  cancelCreate,
}) => {
  return (
    <div className="container py-3">
      <form className="w-50 mx-auto">
        <h1>Create New Post</h1>
        <input
        className="form-control"
          ref={getTitle}
          type="text"
          placeholder="title"
          onChange={saveTitleToState}
        />
        <br />
        <br />
        <textarea
        className="form-control"
          ref={getContent}
          placeholder="content"
          onChange={saveContentToState}
        ></textarea>
        <br />
        <br />
        <button className="btn btn-primary me-3" onClick={savePost}>Create Post</button>
        <button  className= "btn btn-danger me-3"onClick={cancelCreate}>Cancel Create</button>
      </form>
    </div>
  );
};
export default Create;
