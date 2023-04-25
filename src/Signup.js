import React, { useState } from 'react';
import Input from './Input';

function Signup({styleClass}) {
const [data, setData] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    terms: false,
  });
  const [filled, setFill] = useState({
    fullName: false,
    userName: false,
    email: false,
    password: false,
    terms: false,
  });
  const [misc, setMisc] = useState({
    placeholderPlace: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    },
    tooltip: {
      fullName: false,
      userName: false,
      email: false,
      password: false,
      terms: false,
    }
  });

  const [message, setMessage] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    let input = e.target;
    let fill = false;
    if(input.value !== '') {
      fill = true;
    }

    if(input.type === 'checkbox') {
      setData(data => {
        return {...data, [input.name]: input.checked}
      });
    } else {
      setData(data => {
        return {...data, [input.name]: input.value};
      });
      setFill(filled => {
        return {...filled, [input.name]: fill};
      });
    }

    // validation
    let test;
    switch(input.name) {
      case 'fullName':
        test = /^[a-z A-Z]{3,}$/.test(input.value);
        setMessage(message => {
          return {...message, fullName: test ? '' : 'Invalid name'}
        });
        break;

      case 'userName':
        test = /\W/.test(input.value);
        setMessage(message => {
          return {...message, userName: test ? 'Username can only contain a-z, 0-9 and _' : ''}
        });
        break;

      case 'email':
        test = /[\w.][@][\w]/.test(input.value);
        setMessage(message => {
          return {...message, email: test ? '' : 'Email is not valid'}
        });
        break;

      case 'password':
        test = /^(?=.*[0-9])[\w\W]{8,}$/.test(input.value);
        setMessage(message => {
          return {...message, password: test ? '' : 'Password must contain 8 characters and 0-9'}
        });
        break;
        
      default:

    }
  };

  const blurHandler = (e) => {
    let input = e.target.name;
    if(!filled[input]) {
      setMisc(misc => {
        return {...misc, placeholderPlace: {...misc.placeholderPlace, [input]: ''}};
      });
    }
  };

  const focusHandler = (e) => {
    let input = e.target.name;
    setMisc(misc => {
      return {...misc, placeholderPlace: {...misc.placeholderPlace, [input]: 'input-filled'}};
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data)
  };

  return (
    <div className={`signup-wrapper ${styleClass}`}>
      <form onSubmit={submitHandler}>
        <Input 
          name='fullName' 
          placeholder='Full Name' 
          type='text' 
          value={data.fullName} 
          control={{changeHandler, blurHandler, focusHandler}}
          placeholderPlace={misc.placeholderPlace.fullName}
          message={message.fullName}
        />
        <Input 
          name='userName' 
          placeholder='Username' 
          type='text' 
          value={data.userName} 
          control={{changeHandler, blurHandler, focusHandler}}
          placeholderPlace={misc.placeholderPlace.userName}
          message={message.userName}
        />
        <Input 
          name='email' 
          placeholder='Email' 
          type='text' 
          value={data.email} 
          control={{changeHandler, blurHandler, focusHandler}}
          placeholderPlace={misc.placeholderPlace.email}
          message={message.email}
        />
        <Input 
          name='password' 
          placeholder='Password' 
          type='password' 
          value={data.password} 
          control={{changeHandler, blurHandler, focusHandler}}
          placeholderPlace={misc.placeholderPlace.password}
          message={message.password}
        />
        <div>
          <label>
            <input 
              name='terms' 
              type='checkbox'
              checked={data.terms}
              onChange={changeHandler}
            /> I agree to <a href='# '>Privacy Policy </a>and <a href='# '>Terms of Use</a>.
          </label>
        </div>
        <input type='submit' className='button' value='SIGN UP' />
      </form>
    </div>
  );
}

export default Signup;