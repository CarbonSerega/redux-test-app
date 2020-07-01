import React from "react"
import {connect} from 'react-redux'
import Post from "./Post"

const SyncPosts = ({syncPosts}) => {
    return (
        !syncPosts.length ? <p>No posts!</p> :
            syncPosts.map(p => <Post post={p} key={p.id} />)
    )
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.syncPosts
    }
}

export default connect(mapStateToProps, null)(SyncPosts)