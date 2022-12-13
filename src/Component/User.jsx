import React from 'react';

export default function User(props) {
    return (
        <div className='user'>
            <div><img src={props.image} alt="" /></div>
            <div>{props.firstName} {props.lastName}</div>
            <button id={props.id} onClick={props.handlUser}>Detail User</button>
            <button id={props.id} onClick={props.handlPosts}>Liste des posts</button>
        </div>
    )
}
