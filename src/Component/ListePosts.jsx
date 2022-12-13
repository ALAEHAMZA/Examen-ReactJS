import { useEffect, React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router";
import { getPost } from '../Redux/PostsSlice'; 
import "./style.css"



export default function ListePosts() {

    const { id } = useParams();
    const posts = useSelector(state => state.post.data)
    const post = posts.filter((item) => (item.id === id))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);


    return (
        <div>
            {post.map(item=>(
                <div>
                    <div><h2>{item.title}</h2></div>
                    <div>
                        <div><h3>{item.body}</h3></div>
                        <div>
                            <h3>tags :{item.tags}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
