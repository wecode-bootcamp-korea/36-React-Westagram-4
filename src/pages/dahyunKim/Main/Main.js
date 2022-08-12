// import axios from 'axios';
import { useState, useEffect } from 'react';

import Nav from './Components/Nav/Nav';
import MainContainer from './Components/MainContainer/MainContainer';

import './Main.scss';

const MainDahyun = () => {
  const [postData, setPostData] = useState([]);
  const [checkSearch, setCheckSearch] = useState('');

  useEffect(() => {
    const checkStatus = res => {
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

  const searchFilter = postData.filter(item =>
    item.userName.toLowerCase().includes(checkSearch.toLowerCase())
  );

  return (
    <div className="mainApp">
      <Nav setCheckSearch={setCheckSearch} />
      <MainContainer postData={searchFilter} />
    </div>
  );
};

export default MainDahyun;
