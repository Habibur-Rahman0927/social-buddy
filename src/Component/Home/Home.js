import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div>
            <h1>This is Home</h1>
            <h3>I have got : {posts.length} post</h3>

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;