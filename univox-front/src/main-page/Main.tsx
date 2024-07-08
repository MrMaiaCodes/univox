import React from 'react'
import './main.scss'
import Wave from './wave-component/Wave';
import LogIn from '../login-page/login';

function Main() {
    const [page, setPage] = React.useState("1");
    function login() {
        setPage("2");
    }

    function loginPage() {
        return (
            <div>
                <LogIn />

                <div className='button-container'>
                    <button onClick={() => setPage("1")}>
                        Go back
                    </button>
                    <button style={{ marginLeft: "10px" }}>
                        Sign up
                    </button>
                </div>
            </div>

        )
    }

    function initialPage() {
        return (
            <div>
                <h1>
                    Chant
                    <p>speak as one</p>
                </h1>

                <div className='button-container'>
                    <button onClick={() => login()}>
                        Log in
                    </button>
                    <button style={{ marginLeft: "10px" }}>
                        Sign up
                    </button>
                </div>
                <Wave />
            </div>
        )
    }

    return (
        <>
            {
                page === "1" && initialPage()
                ||
                page === "2" && loginPage()

            }
    </>

    )

}

export default Main;