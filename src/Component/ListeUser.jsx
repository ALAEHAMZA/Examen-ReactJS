import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../Redux/UserSlice';
import User from './User';
import "./style.css"

export default function ListeUser(props) {
    
    const {users} = useSelector((state) => state.user.data);
    const navigate = useNavigate();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const handlUser = (e) =>{
        navigate(`DetailUser/${e.target.id}`)
    }
    const handlPosts = (e) =>{
        navigate(`ListePost/${e.target.id}`)
    }
    return(
        <div>
            <h1  >Liste des utilisateurs :</h1>
            <div className='users'>
                {users.map((item) => (
                    <User key ={item.id} image={item.image} firstName={item.firstName} lastName={item.lastName} id={item.id} handlUser={handlUser} handlPosts={handlPosts}/>
                ))}
            </div>
        </div>
    )


}
