import React from "react"
import Post from "./Post";

export default ({posts}) => {
    return (
        !posts.length ? <button className="btn-small darken-2 grey white-text">Load</button> :
            posts.map(p => <Post post={p} key={p} />)
    )
}