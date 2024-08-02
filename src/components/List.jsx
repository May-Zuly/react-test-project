import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {

  const tempPosts = [
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
    { id: 3, title: "t3", content: "c3" },
  ];

  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const [posts, setPosts] = useState(tempPosts);
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  // useEffect(() => {
  //   console.log("title", title);
  // }, [title]);

  // useEffect(() => {
  //   console.log("content", content);
  // }, [content]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreate();
  };

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const cancelCreate=(e)=>{
    e.preventDefault();
    setIsCreate(false);
  }

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const editPost = (id) => {
    setEditId(id);
    toggleEdit();
    // console.log(id);
    // setIsEdit(!isEdit);
  };
 
  const cancelPost = (e)=>{
    e.preventDefault();
    setIsEdit(!isEdit);
  }
  
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
    toggleEdit();
  };

  const deletePost = (id) => {
    const modifiedPost = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPost);
  };


  if (isCreate) {
    //return create component
    return (
      <Create
        getTitle={getTitle}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
      />
    );
    
  } else if (isEdit) {
    //return edit form
    const post = posts.find((post) => {
      return post.id === editId;
    });
    return (
      <Edit
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
      />
    );
  }
  return (
      <>
        <h2>All Posts</h2>
        {!posts.length ? (
          <div>
            <h3>There is nothing to see here!</h3>
          </div>
        ) : (
          <table className="table w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr>
                    <Post
                      key={post.id}
                      id={post.id}
                      title={post.title}
                      content={post.content}
                      editPost={editPost}
                      deletePost={deletePost}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <br />
        <br />
        <button className="btn btn-success me-3" onClick={toggleCreate}>
      <FontAwesomeIcon icon={faPlus} className="me-2"/>Create New
        </button>
      </>
    );
};

export default List;
