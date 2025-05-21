import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import Wave from './wave-component/Wave';
//import SignUp from '../signup-page/SignUp';
//import LogIn from '../login-page/Login';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const body = document.body;
        body.classList.add("no-scroll");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return () => {
            body.classList.remove("no-scroll");
        }
    }, []);

    return (
        <div className='initial-page-container'>
            <div className='button-container-login'>
                <button onClick={() => navigate('/login')}>Log in</button>
                <button style={{ marginLeft: '10px' }} onClick={() => navigate('/signup')}>
                    Sign up
                </button>

            </div>
            <h1>
                Chant
                <p>speak as one</p>
            </h1>
            <div className='button-container-room'>
                <button onClick={() => navigate('/rooms')}>Enter Existing Room</button>
                <button style={{ marginLeft: '10px' }} onClick={() => navigate('/signup')}>
                    Create Room
                </button>
            </div>
            <Wave/>
        </div>
    )
}

export default Home;