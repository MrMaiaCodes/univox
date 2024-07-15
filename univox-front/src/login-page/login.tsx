import * as React from 'react';
import Card from '@mui/material/Card';
import './login.scss';


export default function LogIn() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validUser, setValidUser] = React.useState(false);

  React.useEffect(()=> {
    checkUser();
  }, [user, password])
  const checkUser = () => {
    const findEmailPaterRegex = /^(\w|\.)+@\w+(\.com|\.com.br)$/;      
      if (user != "" && password != "") {
        setValidUser(true);
      } else {
        setValidUser(false);
      }
    //arrumar o retorno desta função
  };
  return (
    <div className='login-card'>
      <h1>
        Chant
      </h1>
      <Card sx={{ 
        width: 400,
        height: 500,
        padding: "15px 50px 0px 50px",
        maxWidth: 500,
        }}>
        
          <form className='login-form'>
            <h2 style={{alignSelf: 'center', fontSize: '30px', marginBottom: '1px'}}>
              Login
            </h2>
            <p className='login-p'>
              User:
            </p>
            <input
              onChange={(e) => {
                setUser(e.target.value);
              }}
          placeholder='Enter username here'
              value={user}
            />
            <p className='login-p'>
              Password:
            </p>
            <input
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder='Enter password here'
              value={password}
            />

            <button style={{ marginTop: '30px'}}
              onClick={(e) => { e.preventDefault() }}
              disabled={!validUser}
            >
              Confirm
            </button>
            <button style={{ marginTop: '30px'}}>
              forgot password?
            </button>
          </form>
        
      </Card>
    </div>

  );
}
