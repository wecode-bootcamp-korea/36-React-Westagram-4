import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBosung from './pages/bosungMoon/Login/Login';
import MainBosung from './pages/bosungMoon/Main/Main';

import LoginKyeongyong from './pages/kyeongyongSong/Login/Login';
import MainKyeongyong from './pages/kyeongyongSong/Main/Main';

import LoginDahyun from './pages/dahyunKim/Login/Login';
import MainDahyun from './pages/dahyunKim/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-bosung" element={<LoginBosung />} />
        <Route path="/main-bosung" element={<MainBosung />} />

        <Route path="/login-kyeongyong" element={<LoginKyeongyong />} />
        <Route path="/main-kyeongyong" element={<MainKyeongyong />} />

        <Route path="/login-dahyun" element={<LoginDahyun />} />
        <Route path="/main-dahyun" element={<MainDahyun />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
