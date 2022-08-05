import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.scss';

const LoginDahyun = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });

  const loginDataSave = ({ target }) => {
    const { name, value } = target;
    setLoginData({ ...loginData, [name]: value });
  };

  const { id, password } = loginData;

  const isActive = id.includes('@') && password.length >= 5;

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-dahyun');
  };

  return (
    <div className="loginApp">
      <main>
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <input
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름또는 이메일"
            onChange={loginDataSave}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={loginDataSave}
          />
          <button
            type="submit"
            className="loginBtn"
            disabled={!isActive}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="midLine">
          <div className="line" />
          <div className="or">
            <span>또는</span>
          </div>
          <div className="line" />
        </div>
        <Link to="#" className="pwdFind">
          비밀번호를 잊으셨나요?
        </Link>
      </main>
    </div>
  );
};

export default LoginDahyun;
