import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginps = () => {
  const navigate = useNavigate();

  const [id, setid] = useState('');
  const [password, setpassword] = useState('');

  const saveUserId = event => {
    setid(event.target.value);
  };

  const saveUserPassword = event => {
    setpassword(event.target.value);
  };

  const InputValue = id.includes('@') && password.length >= 5;

  return (
    <form>
      <input
        className="inputIdPw"
        onChange={saveUserId}
        type="text"
        id="id"
        placeholder="전화번호,사용자 이름 또는 이메일"
      />
      <input
        className="inputIdPw"
        onChange={saveUserPassword}
        type="password"
        id="password"
        placeholder="비밀번호"
      />

      <button
        className={InputValue ? 'loginButton' : 'loginButtonFalse'}
        disabled={InputValue ? false : true}
        onClick={e => {
          e.preventDefault();
          fetch('http://10.58.4.241:3000/auth/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: id, password: password }),
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              localStorage.setItem('Token', data.accessToken);
              navigate('/main-bosung');
            });
        }}
      >
        <strong>로그인</strong>
      </button>
      <button
        className="loginButton"
        onClick={e => {
          e.preventDefault();
          fetch('http://10.58.4.241:3000/auth/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: id, password: password }),
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            });
        }}
      >
        <strong>회원가입</strong>
      </button>
    </form>
  );
};

export default Loginps;
