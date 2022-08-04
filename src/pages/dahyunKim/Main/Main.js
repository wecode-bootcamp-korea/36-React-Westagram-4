import { Link } from 'react-router-dom';

import './Main.scss';

const MainDahyun = () => {
  return (
    <div className="mainApp">
      <header>
        <div className="header-group">
          <div className="logo-group">
            <Link
              to="#"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <i className="fa-brands fa-instagram" />
            </Link>
            <h1 className="logo-title">
              <Link
                to="#"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Instagram
              </Link>
            </h1>
          </div>
          <div className="search-group">
            <i className="fa-solid fa-magnifying-glass" />
            <input className="search-bar" type="text" placeholder="검색" />
          </div>
          <nav className="nav-group">
            <Link to="#">
              <img src="images/dahyunKim/explore.png" alt="탐색" />
            </Link>
            <Link to="#">
              <img src="images/dahyunKim/heart.png" alt="좋아하는 페이지" />
            </Link>
            <Link to="#">
              <img src="images/dahyunKim/profile.png" alt="유저 프로필" />
            </Link>
          </nav>
        </div>
      </header>
      <div className="main-container">
        <main>
          <section className="time-line">
            <ol>
              <li>
                <article className="post-1">
                  <header className="post-header">
                    <div className="writer-img" />
                    <h2>Pulan</h2>
                    <button type="button">
                      <i className="fa-solid fa-ellipsis" />
                    </button>
                  </header>
                  <div className="post-img" />
                  <footer className="post-footer">
                    <div className="post-btns">
                      <div className="btns-likes">
                        <i className="likeMenu3 fa-regular fa-heart" />
                        <i className="likeMenu3 fa-regular fa-comment" />
                        <i className="likeMenu3 fa-regular fa-share-from-square" />
                      </div>
                      <i className="fa-regular fa-bookmark" />
                    </div>
                    <div className="post-comments">
                      <ol>
                        <li className="comment">
                          <span className="userId">Pulan</span>
                          <span className="content">
                            정말 멋있는 사진이에요~
                          </span>
                        </li>
                        <li className="comment">
                          <span className="userId">Pulan</span>
                          <span className="content">
                            정말 멋있는 사진이에요~
                          </span>
                        </li>
                        <li className="comment">
                          <span className="userId">Pulan</span>
                          <span className="content">
                            정말 멋있는 사진이에요~
                          </span>
                        </li>
                      </ol>
                      <form className="post-form">
                        <input type="text" placeholder="댓글 달기..." />
                        <button type="submit">게시</button>
                      </form>
                    </div>
                  </footer>
                </article>
              </li>
            </ol>
          </section>
        </main>
        <aside>
          <header className="user-profile">
            <div className="profile-img" />
            <div className="profile-info">
              <h2>wecode_bootCamp</h2>
              <p>WeCode | 위코드</p>
            </div>
          </header>
        </aside>
      </div>
    </div>
  );
};

export default MainDahyun;
