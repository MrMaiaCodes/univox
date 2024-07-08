import * as React from 'react';
import Card from '@mui/material/Card';
import './login.css';


export default function LogIn() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validUser, setValidUser] = React.useState(false);

  React.useEffect(()=> {
    checkUser();
  }, [user, password])
  const checkUser = (userEmail?: string) => {
    const findEmailPaterRegex = /^(\w|\.)+@\w+(\.com|\.com.br)$/;
    if(userEmail) {
      const emailTest = findEmailPaterRegex.test(userEmail);
      if (emailTest) {
        setValidUser(true);
      } else {
        setValidUser(false);
      }
    }
    //arrumar o retorno desta função
    setValidUser(true);
  };
  return (
    <div className='login-card'>
      <Card sx={{ maxWidth: 345 }}>
        <div className='login-form'>
          <form className='login-form'>
            <p>
              user:
            </p>
            <input
              onChange={(e) => {
                setUser(e.target.value);
                checkUser(e.target.value);
              }}
          placeholder='enter username here'
              value={user}
            />
            <p>
              password:
            </p>
            <input
              type="password"
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder='enter password here'
              value={password}
            />

            <button style={{ margin: '30px' }}
              onClick={(e) => { e.preventDefault() }}
              disabled={!validUser}
            >
              confirm
            </button>
          </form>
        </div>
      </Card>
    </div>

  );
}
