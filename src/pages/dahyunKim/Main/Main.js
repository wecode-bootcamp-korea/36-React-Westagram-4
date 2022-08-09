import Nav from './Components/Nav/Nav';
import MainContainer from './Components/MainContainer/MainContainer';

import './Main.scss';
import { useState, useEffect } from 'react';

const MainDahyun = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch('/data/post.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        return setPostData(data);
      });
  }, []);

  return (
    <div className="mainApp">
      <Nav />
      <MainContainer postData={postData} setPostData={setPostData} />
    </div>
  );
};

export default MainDahyun;
