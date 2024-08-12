import * as React from 'react';
import Card from '@mui/material/Card';

export default function SignUp() {
/* if the function or class is a component, or rather, something
that will be displayed on the screen, the first letter must be capitalized{
    below are three examples of what a state looks like: a variable,
    with the value and the direction over the value as parameters
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validUser, setValidUser] = React.useState(false);
  */

  /*in the useEffect below, checkUser will be activated when user and password are put in
  If user and password parameters didn't exist, checkUser would only start as soon as signup page loaded,
  whereas in this case it runs both on load and when parameters user and password are put in
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
  */
  return (
    <div className='signup-card'>
      <h1>
        Chant
      </h1>
      <Card sx={{ 
        width: 400,
        height: 500,
        padding: "15px 50px 0px 50px",
        maxWidth: 500,
        }}>
        
          <form className='signup-form'>
            <h1>
            email
            password
            confirm password
            security question
            answer
            Full Name
            Birthdate
            DocumentNumber
            photo/icon
            gender
            </h1>
          </form>
        
      </Card>
    </div>

  );
}
