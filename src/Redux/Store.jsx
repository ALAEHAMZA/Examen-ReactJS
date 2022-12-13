import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import PostReducer from "./PostsSlice";



const reducer = combineReducers({
    user: UserReducer,
    post: PostReducer,
});

const store = configureStore({reducer}); 


export default store; 