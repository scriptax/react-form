import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import Tabs from './Tabs';

function App() {
  const [tab, setTab] = useState({
    tabs: {
      login: 'active-tab',
      signup: 'deactive-tab'
    },
    page: {
      login: '',
      signup: ''
    },
    modalHeight: '350px'
  });

  const tabHandler = (e) => {
    if(e.target.innerHTML === 'SIGN UP') {
      setTab({
          tabs: {login: 'deactive-tab', signup: 'active-tab'},
          page: {login: 'login-deactive', signup: 'signup-active'},
          modalHeight: '460px'
      });
    } else {
      setTab({
          tabs: {login: 'active-tab', signup: 'deactive-tab'},
          page: {login: 'login-active', signup: 'signup-deactive'},
          modalHeight: '330px'
      });
    }
  }; 

  return (
    <div className='modal' style={{height: tab.modalHeight}}>
      <Tabs control={tabHandler} handleStyle={tab.tabs}/>
      <Login styleClass={tab.page.login}/>
      <Signup styleClass={tab.page.signup}/>
    </div>
  );
}

export default App;