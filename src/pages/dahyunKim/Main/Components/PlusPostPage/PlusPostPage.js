import './PlusPostPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlusPostPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const PlusPostSave = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };
  const { title, userId, content, postIamge } = formData;

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-dahyun');
  };

  const checkLoginData = e => {
    e.preventDefault();
    const getToken = localStorage.getItem('accessToken');

    const checkStatus = res => {
      if (!res.ok) {
        throw new Error(`Again Check Status: ${res.status}`);
      } else {
        goToMain();
      }
      return res.json();
    };

    const checkData = url => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: getToken,
        },
        body: JSON.stringify({
          title: title,
          content: content,
          userId: userId,
          postIamge: postIamge,
        }),
      });
    };

    checkData('http://10.58.4.174:3000/posts')
      .then(checkStatus)
      .catch(console.error);
  };

  return (
    <div className="PlusPostPage">
      <main>
        <h2 className="title">게시물 작성</h2>
        <form className="plusForm">
          <input
            type="text"
            className="formInfo"
            name="title"
            placeholder="제목"
            onChange={PlusPostSave}
          />
          <input
            type="number"
            className="formInfo"
            name="userId"
            placeholder="아이디"
            onChange={PlusPostSave}
          />
          <input
            type="text"
            className="formInfo"
            name="postIamge"
            placeholder="이미지 url"
            onChange={PlusPostSave}
          />
          <textarea
            className="formInfo"
            name="content"
            placeholder="내용"
            onChange={PlusPostSave}
          />
          <button className="formBtn" onClick={checkLoginData}>
            게시물 저장하기
          </button>
        </form>
      </main>
    </div>
  );
};

export default PlusPostPage;
