import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
const Post = ({ id, title, content ,editPost, deletePost  }) => {
    return (
      <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <button className="btn btn-primary me-3" onClick={() => editPost(id)}><FontAwesomeIcon icon={faEdit} /></button>
        <button className="btn btn-danger me-3" onClick={() => deletePost(id)}><FontAwesomeIcon icon={faTrash} /></button>
      </td>
    </>
    );
  };
  export default Post;