import React from "react";
import ListeUser from "./ListeUser";
import "./style.css"

export default function Acceuil() {
    return (
        <>
            <header><h1>Gestion des posts</h1></header>
            <ListeUser/>
        </>
    )
}