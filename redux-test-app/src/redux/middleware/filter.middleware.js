import {CREATE_POST} from "../post.actionTypes";
import {showAlert} from "../post.actions";

const forbidden = ['spam', 'bad', 'dummy']

export function filterInputMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === CREATE_POST) {
                const found = forbidden.filter(i => action.payload.title.includes(i))
                if(found.length) {
                    return dispatch(showAlert('Bad words detected in the post title!'))
                }
            }
            return next(action)
        }
    }
}