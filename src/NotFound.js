import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NotFound(props) {

    let navigate = useNavigate();

    const prev = window.location.href;
    setTimeout(() => {
        if (window.location.href === prev)
            navigate('')
    }, 5000);

    return (
        <h1>Not Found</h1>
    )
}
