import React from 'react';

function Input(props) {
  const {
    name,
    placeholder,
    type,
    value,
    placeholderPlace,
    message,
    control: {
      changeHandler,
      blurHandler,
      focusHandler
    }
  } = props;

  const validation = (
    <>
      {
        value === '' ? (
          <></>
        ) : (
          !message ? (
            <span className='checkmark'></span>
          ) : (
            <span className='message'>{message}</span>
          )
        )
      }
    </>
  );
  return (
    <label className='input-wrapper'>
      <input 
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
      <span className={`placeholder ${placeholderPlace}`}>{placeholder}</span>
      {validation}
    </label>
  );
}

export default Input;