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
        onClick={() => {
          navigate('/main-bosung');
        }}
      >
        <strong>로그인</strong>
      </button>
    </form>
  );
};

export default Loginps;
