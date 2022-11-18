import React, { useState } from 'react';


// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';
const styles = {
    container :{
        margin: '25px',
      width: '100%',
     height: '100%',
     position: 'relative',

    },
   
    centered :{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
}

function Cantact () {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
  
    // If successful, we want to clear out the input after registration.
    setUserName('');
   


    setEmail('');
    alert(`Hello ${userName}`);
  };

  return (

    <div>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>

      <div className="col-12 col-lg-9">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="abc@email.com"
          className="form-control"
        />
        </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="form-control"
        />
        </div>
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        <div className="col-12 col-lg-9">

        </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <a className="btn btn-primary">Send</a>
    
      {errorMessage && (
        <div className="col-12 my-3 bg-danger text-white p-3">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
 </div>

  );
}

export default Cantact;
