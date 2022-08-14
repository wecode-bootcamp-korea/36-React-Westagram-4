// import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import MainContainer from './Components/MainContainer/MainContainer';

import './Main.scss';

const MainDahyun = () => {
  const [postData, setPostData] = useState({
    postList: [],
    items: 5,
    preItems: 0,
  });
  const [checkSearch, setCheckSearch] = useState('');

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadPostData = data => {
      const { postList, preItems, items } = postData;
      const sliceData = data.slice(preItems, items);
      setPostData({ ...postData, postList: [...postList, ...sliceData] });
    };
    const getPosts = url =>
      fetch(url, {
        method: 'GET',
      });

    getPosts('/data/post.json')
      .then(checkStatus)
      .then(uploadPostData)
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData.items]);

  const searchFilter = postData.postList.filter(item =>
    item.userName.toLowerCase().includes(checkSearch.toLowerCase())
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onScroll = () => {
    const { items } = postData;
    const { documentElement, body } = document;

    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );

    const scrollRatio =
      Math.ceil(scrollTop) + Math.ceil(clientHeight) >= scrollHeight;

    if (scrollRatio > 0.95) {
      setPostData({ ...postData, items: items + 5, preItems: items });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <div className="mainApp">
      <Nav setCheckSearch={setCheckSearch} />
      <Link to="/PlusPostPage" className="plusDiv">
        + 게시물 추가
      </Link>
      <MainContainer postData={searchFilter} />
    </div>
  );
};

export default MainDahyun;
