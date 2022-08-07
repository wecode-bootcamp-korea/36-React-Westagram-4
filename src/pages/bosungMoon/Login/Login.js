import React from 'react';
import './Login.scss';
import Loginps from './Loginps';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const LoginBosung = () => {
  // const navigate = useNavigate();

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
