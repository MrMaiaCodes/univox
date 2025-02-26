import * as React from 'react';
import Card from '@mui/material/Card';
import './signup.scss';

const initialFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  securityQuestion: "",
  answer: "",
  fullName: "",
  birthdate: "",
  country: "",
  documentType: "",
  documentNumber: "",
  gender: ""

}
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
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const [icon, setIcon] = React.useState();

  const handleImputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  function iconAlterer(e) {
    console.log(e.target.files);
    const file = e.target.files[0] as Blob;
    // @ts-ignore
    setIcon(URL.createObjectURL(file))
  }


  // {<option value='mother'>Mother's maiden name</option>
  //             <option value='city'>City you grew up in</option>
  //             <option value='food'>Favorite food</option>
  //             <option value='pet'>Pet name</option> }
  const securityQuestionOptions = [
    { id: 1, value: "mother", text: "Mother's maiden name" },
    { id: 2, value: "city", text: "City you grew up in" },
    { id: 3, value: "food", text: "Favorite food" },
    { id: 4, value: "pet", text: "Pet name" }
  ];

  /* email: "",
  password: "",
  confirmPassword: "",
  securityQuestion: "", */
  return (
    <div className='signup-card'>
      <h1>
        Chant
      </h1>
      <Card sx={{
        width: 420,
        height: 500,
        padding: "15px 50px 0px 50px",
        maxWidth: 500,
      }}>

        <form className='signup-form'>
          <h2>
            Create your account to send out a chant!
          </h2>
          <p>email</p>
          <input
            placeholder='enter your email'
            name='email'
            value={formValues.email}
            onChange={handleImputChange} />
          <p>password</p>
          <input
            placeholder='enter your password'
            name='password'
            type='password'
            value={formValues.password}
            onChange={handleImputChange}
          />
          <p>confirm password</p>
          <input
            placeholder='confirm your password'
            name='confirmPassword'
            type='password'
            value={formValues.confirmPassword}
            onChange={handleImputChange}
          />
          <p>security question</p>
          {/* <input placeholder='select one of the security questions below' name='securityQuestion' value={formValues.securityQuestion}/> */}
          <select name='securityQuestion' value={formValues.securityQuestion} onChange={handleImputChange}>
            {securityQuestionOptions.map((val, idx) => <option value={val.value}>{val.text}</option>)}
            {/* <option value='mother'>Mother's maiden name</option>
            <option value='city'>City you grew up in</option>
            <option value='food'>Favorite food</option>
            <option value='pet'>Pet name</option> */}
          </select>
          {/* select one of the security questions below: */}
          <p>answer</p>
          <input placeholder='enter the answer to the question above' />
          <p>full name</p>
          <input placeholder='enter full name' name='name' value={formValues.fullName} onChange={handleImputChange} />
          <p>birthdate</p>
          <input placeholder='enter birthdate' name='birthdate' type='date' onChange={handleImputChange} />
          {/* make a calendar */}
          <p>country</p>
          <input placeholder='enter country' name='country' value={formValues.country} onChange={handleImputChange} />
          {/* pick country */}
          <p>document type</p>
          <input placeholder='enter document type' name='documentType' value={formValues.documentType} onChange={handleImputChange} />
          {/* make document type field also a select */}
          <p>document number</p>
          <input placeholder='enter document number' name='documentNumber' value={formValues.documentNumber} onChange={handleImputChange} />
          <p>photo/icon</p>
          <input placeholder='insert photo or icon' type='file' onChange={iconAlterer} />
          <p>gender</p>
          <select name='gender' value={formValues.gender} onChange={handleImputChange}>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='non-binary'>non-binary</option>
          </select>
          {/* drop-down list */}
          <p>We will use your information only to confirm your identity</p>
          <p>Click on the checkbox below to accept terms of service</p>
          <p>We guarantee neither your personal information nor the messages
            you dictate will be intentionally disclosed to any third party</p>
          <button style={{width: "30px", alignSelf: "center", marginRight: "20px"}}>
            Save Info
          </button>
        </form>

      </Card>
    </div>

  );
}
