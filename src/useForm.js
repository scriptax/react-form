import { useState } from 'react';

function useForm() {
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

  return {
    data,
    misc,
    changeHandler,
    blurHandler,
    focusHandler,
    submitHandler
    };
}

export default useForm;