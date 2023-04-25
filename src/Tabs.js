import React from 'react';

function Tabs(props) {
  const {control, handleStyle:{login, signup}} = props;
  return (
    <div className='tabsbar'>
      <button onClick={control} className={`tab ${login}`}>LOG IN</button>
      <button onClick={control} className={`tab ${signup}`}>SIGN UP</button>
    </div>
  );
}

export default Tabs;