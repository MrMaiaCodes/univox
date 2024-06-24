import React from 'react'
import './main.css'
import Wave from './wave-component/Wave';
import MultiActionAreaCard from '../login-page/login';

function Main() {
    const [color, setColor] = React.useState("blue");
    const [page, setPage] = React.useState("1");
    function changeButtonColor() {
        setColor("red");
        setPage("2");
    }

    return (
        <div><MultiActionAreaCard/></div>
        
       
    )
}

export default Main;