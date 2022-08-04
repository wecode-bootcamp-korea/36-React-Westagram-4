import { Link } from 'react-router-dom';

import './Login.scss';

const LoginDahyun = () => {
  return (
    <div className="loginApp">
      <main>
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <input
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름또는 이메일"
          />
          <input type="password" name="password" placeholder="비밀번호" />
          <Link to="/main-dahyun" style={{ textDecoration: 'none' }}>
            <button type="submit" className="loginBtn">
              로그인
            </button>
          </Link>
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
