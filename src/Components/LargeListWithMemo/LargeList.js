
import React, { useEffect, useState, memo } from 'react'
import Post from './Post'
import Loadding from '../Loading/Loading'

export default function LargeList() {

    function sleep(ms, value) {
        return new Promise(resolve => setTimeout(resolve, ms, value));
    }
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '' });
    const [loading, setloading] = useState(false);

    function showMore() {
        setloading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then(async objt => {
                await sleep(300);
                setPosts(posts.concat(objt.map(o => {
                    o.id = Math.random();
                    return o;
                })))
                setloading(false);
            })
            .catch(() => setloading(false));
    }

    useEffect(() => {
        showMore();
    }, []);

    return (

        <div>
            <h1>Large List With Memo</h1>
            <p>Items : {posts.length}</p>
            <button onClick={showMore} disabled={loading} className='btn transp'>Show more</button>
            {loading &&
                <>
                    <div style={{ zIndex: '40' }} className='absoluteCenter'><Loadding /></div>
                    <div className='overlay'></div>
                </>
            }
            {posts.map((objt, index) => <Post key={objt.id} post={objt} />)}
        </div>
    )
}

