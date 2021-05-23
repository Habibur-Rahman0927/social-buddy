import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comment/Comments';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data));
    }, [])
    return (
        <div>
            <h1>This is Post details : {post.id}</h1>
            <p>User posted : {post.id}</p>
            <p>title : {post.title}</p>
            <p>post body : {post.body}</p>
            <p>Number of comments: {comment.length}</p>
            {
                comment.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetails;