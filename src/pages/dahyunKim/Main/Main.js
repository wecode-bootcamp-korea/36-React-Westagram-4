import Nav from './Components/Nav/Nav';
import MainContainer from './Components/MainContainer/MainContainer';

import './Main.scss';
import { useState, useEffect } from 'react';

const MainDahyun = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const checkStatus = res => {
      //* 주소로 데이터를 받아오다가 에러가 생기면 res.ok = false가 되는데 파일로 받아오면 계속 true만 나와서 실행이 안된다...
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadPostData = data => setPostData(data);
    const getPosts = url => {
      return fetch(url);
    };

    getPosts('/data/post.json')
      .then(checkStatus)
      .then(uploadPostData)
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="mainApp">
      <Nav />
      <MainContainer postData={postData} />
    </div>
  );
};

export default MainDahyun;
