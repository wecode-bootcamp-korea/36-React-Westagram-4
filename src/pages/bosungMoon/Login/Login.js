import React from 'react';
import './Login.scss';
import Loginps from './Loginps';

const LoginBosung = () => {
  return (
    <div className="logIn">
      <div className="mainTitle">westagram</div>
      <Loginps />
      <div className="forgotpassword">
        <a href="www.wecode.com">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
};

export default LoginBosung;
