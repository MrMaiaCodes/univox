import React from 'react'
import './home.scss'
import Wave from './wave-component/Wave';
import LogIn from '../login-page/login';
import SignUp from '../signup-page/signup';

function Home() {
    const [page, setPage] = React.useState("1");
    function login() {
        setPage("2");
    }

    /*this signup is lowercase cause it is not creating a component, but merely recalling one*/
    function signUpPage() {
        return (
            <div>
                <SignUp/>
            </div>
        )
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
                //page === "2" && loginPage()
                page === "2" && signUpPage()

            }
    </>

    )

}

export default Home;