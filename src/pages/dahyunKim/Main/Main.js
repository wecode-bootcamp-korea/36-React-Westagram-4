// import axios from 'axios';
import { useState, useEffect } from 'react';

import Nav from './Components/Nav/Nav';
import MainContainer from './Components/MainContainer/MainContainer';

import './Main.scss';

const MainDahyun = () => {
  const [postData, setPostData] = useState([]);
  const [checkSearch, setCheckSearch] = useState('');
  const [copyData, setCopyData] = useState([]);

  useEffect(() => {
    const checkStatus = res => {
      //* 주소로 데이터를 받아오다가 에러가 생기면 res.ok = false가 되는데 파일로 받아오면 계속 true만 나와서 실행이 안된다...
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadPostData = data => {
      setPostData(data);
    };
    const getPosts = url => fetch(url);

    getPosts('/data/post.json')
      .then(checkStatus)
      .then(uploadPostData)
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const copy = [...postData];
    setCopyData(
      copy.filter(
        item =>
          checkSearch.length >= 2 &&
          (item.userName.toLowerCase() === checkSearch ||
            item.userName.toLowerCase().includes(checkSearch))
      )
    );
  }, [checkSearch, postData]);

  return (
    <div className="mainApp">
      <Nav setCheckSearch={setCheckSearch} />
      <MainContainer postData={copyData.length > 0 ? copyData : postData} />
    </div>
  );
};

export default MainDahyun;
