import {
    CREATE_POST,
    FETCH_POSTS,
    HIDE_ALERT,
    HIDE_LOADER,
    SHOW_ALERT,
    SHOW_LOADER
} from "./post.actionTypes";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return {
        type: SHOW_ALERT,
        payload: text
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchPosts() {
    return async dispatch => {
        try{
            dispatch(showLoader())
            const response = await fetch('http://jsonplaceholder.typicode.com/posts')
            const json = await response.json()

            dispatch({type: FETCH_POSTS, payload: json})
            dispatch(hideLoader())
            dispatch(hideAlert())
        } catch (e) {
            dispatch(showAlert('Something went wrong!'))
            setTimeout(() => dispatch(hideAlert()), 2000)
        }
    }
}