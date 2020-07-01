import {CREATE_POST, FETCH_POSTS} from "./post.actionTypes";

const initialState = {
    syncPosts: [],
    asyncPosts: []
}
export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_POST:
            return {...state, syncPosts: [...state.syncPosts, action.payload]}
        case FETCH_POSTS:
            return {...state, asyncPosts: action.payload}
        default:  return state
    }


}