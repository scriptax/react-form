import React, { useState } from 'react';
import Input from './Input';

function Login({styleClass}) {
  const [data, setData] = useState({
    user: '',
    password: '',
    rememberMe: false,
  });
  const [filled, setFill] = useState({
    user: false,
    password: false,
  });
  const [misc, setMisc] = useState({
    placeholderPlace: {
      user: '',
      password: ''
    },
    tooltip: {
      user: false,
      password: false
    }
  });

  const changeHandler = (e) => {
    let misc = e.target;
    let fill = false;
    if(misc.value !== '') {
      fill = true;
    }

    if(misc.type === 'checkbox') {
      setData(data => {
        return {...data, [misc.name]: misc.checked}
      });
    } else {
      setData(data => {
        return {...data, [misc.name]: misc.value};
      });
      setFill(filled => {
        return {...filled, [misc.name]: fill};
      });
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
    <div className={`login-wrapper ${styleClass}`}>
      <form onSubmit={submitHandler}>
        <Input 
          name='user' 
          placeholder='Username or Email' 
          type='text' 
          value={data.user} 
          control={{changeHandler, blurHandler, focusHandler}}
          placeholderPlace={misc.placeholderPlace.user}
          message={' '}
        />
        <Input 
          name='password' 
          placeholder='Password' 
          type='password' 
          value={data.password} 
          control={{changeHandler, blurHandler, focusHandler}}
          placeholderPlace={misc.placeholderPlace.password}
          message={' '}
        />
        <div>
          <label>
            <input 
              name='rememberMe' 
              type='checkbox'
              checked={data.rememberMe}
              onChange={changeHandler}
            /> Remember Me
          </label>
          <a href='# '>Forgot Password</a>
        </div>
        <input type='submit' className='button' value='LOGIN' />
      </form>
    </div>
  );
}

export default Login;