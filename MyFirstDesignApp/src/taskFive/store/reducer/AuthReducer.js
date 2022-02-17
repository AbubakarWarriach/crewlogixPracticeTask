export const SET_USER_DETAIL = "SET_USER_DETAIL";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_USER_POSTS = "SET_USER_POSTS";
const initState = {
    userPosts: [],
    userDetail: {},
    user: false
};

const AuthReducer = ((state = initState, action) => {
    switch(action.type){
        case SET_USER_DETAIL:
            return {...state, userDetail: action.payload, user: true };
        case SET_LOGOUT:
            return {...state, userDetail: {}, user: false};
        case SET_USER_POSTS:
            return {...state, userPosts: action.payload};
        default:
            return state;
    }
});
export default AuthReducer;