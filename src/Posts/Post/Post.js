import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.id}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;