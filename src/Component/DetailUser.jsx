import { useEffect, React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router";
import "./style.css"
import { getUser } from '../Redux/UserSlice';


export default function DetailUser() {

    const { id } = useParams();
    const users = useSelector(state => state.user.data.users)
    const user = users.filter((item) => (item.id === id))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <div>
            <h1>Detail de {user.firstName}</h1>
            <div>
                <div><img src={user.image} alt =""/></div>
                <div>Name : {user.firstName} {user.lastName}</div>
                <div>Age : {user.age}</div>
                <div>Gender : {user.gender}</div>
                <div>Email : {user.email}</div>
                <div>Phone : {user.phone}</div>
                <div>Poids :{user.weight}</div>
                <div>Hauteur : {user.height}</div>
                <div>Date de naissance : {user.birthDate}</div>
                <div>Groupe sanguin : {user.bloodGroup}</div>
                <div>La couleur d'oeil : {user.eyeColor}</div>
            </div>
        </div>
    )
};
