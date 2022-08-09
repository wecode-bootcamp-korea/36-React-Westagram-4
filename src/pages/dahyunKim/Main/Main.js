import axios from 'axios';
import { useState, useEffect } from 'react';

import Nav from './Components/Nav/Nav';
import MainContainer from './Components/MainContainer/MainContainer';

import './Main.scss';

const MainDahyun = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const uploadPostData = ({ data }) => setPostData(data);
    const getPosts = url => axios.get(url);

    getPosts('/data/post.json').then(uploadPostData).catch(console.error);
  }, []);

  return (
    <div className="mainApp">
      <Nav />
      <MainContainer postData={postData} />
    </div>
  );
};

export default MainDahyun;
