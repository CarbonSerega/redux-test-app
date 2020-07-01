import React from "react"
import Post from "./Post";

export default ({posts}) => {
    return (
        !posts.length ? <p>No posts!</p> :
        posts.map(p => <Post post={p} key={p} />)
    )
}