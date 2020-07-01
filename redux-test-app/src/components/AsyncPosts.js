import React from "react"

import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/post.actions";

export default () => {

    const dispatch = useDispatch()
    const asyncPosts = useSelector((state) => state.posts.asyncPosts)

    const loading = useSelector((state) =>  state.app.loading)

    if(loading) {
        return (
            <div className="progress">
                <div className="indeterminate"/>
            </div>
        )
    }

    return (
        !asyncPosts.length ? <button
                className="btn-small darken-2 grey white-text"
                onClick={() => dispatch(fetchPosts())}>Load</button> :
            asyncPosts.map(p => <Post post={p} key={p.id} />)
    )
}