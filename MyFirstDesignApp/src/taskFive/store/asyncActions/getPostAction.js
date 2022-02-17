import { SET_USER_POSTS } from "../reducer/AuthReducer";

export const getUserPost = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const userPost = await response.json();
            // console.log(userPost);
            dispatch({ type: SET_USER_POSTS, payload: userPost });
        } catch (error) {
            console.log(error);
        }
    }
}