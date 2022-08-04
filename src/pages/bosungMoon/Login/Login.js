import React from "react";
import "./Login.scss";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="logIn">
        <div className="mainTitle">westagram</div>
        <input
          type="text"
          id="id"
          placeholder="전화번호,사용자 이름 또는 이메일"
        />
        <input type="password" id="password" placeholder="비밀번호" />
        {/* <Link to="/main"> */}
        <button
          id="loginButton"
          onClick={() => {
            navigate("/main");
          }}
        >
          <strong>로그인</strong>
        </button>
        {/* </Link> */}
        <div className="forgotpassword">
          <a href="www.wecode.com">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </>
  );
};

export default Login;
