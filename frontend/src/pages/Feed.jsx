import React, { useState, useEffect } from 'react'  //useState → stores data (your posts)  useEffect → runs side effects (API call here)
import axios from "axios"                           //axios → used to fetch data from backend


const Feed = () => {

    /* 
    useState(...)
    This is a React Hook.
    👉 It lets your component remember data and re-render when it changes
    
    posts → current value (your data)
    setPosts → function to update it
    */



    /* useEffect(() => { ... }, [])
        This basically says:
        “Run this code once when the component loads.”
        The [] = empty dependency array
        Meaning → it runs only on mount, not on every render
        👉 If you remove [], congrats, you just created an infinite API call loop 💀
        


        axios.get("http://localhost:3000/posts")
        This sends a GET request to your backend.


        .then((res) => { ... })
        This runs when the API responds successfully.
        setPosts(res.data.posts)
        This is the important part.
        👉 You take the posts from backend and store them in state.
        And when state updates:
        💥 React re-renders the UI automatically
        */
        

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            caption: "Beautiful scenery",
        } // This is the default state.
    ])

    useEffect(() => {

        axios.get("http://localhost:3000/posts")
            .then((res) => {

                setPosts(res.data.posts)

            })

    }, [])


    return (

        <section className='feed-section' >

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>

    )
}

export default Feed