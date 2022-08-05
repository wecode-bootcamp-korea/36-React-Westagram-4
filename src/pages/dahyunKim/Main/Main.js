import { Link } from 'react-router-dom';

import './Main.scss';

const MainDahyun = () => {
  return (
    <div className="mainApp">
      <header className="main-header">
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
        <main className="main-content">
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
          <section className="story">
            <header className="story-header">
              <h2>스토리</h2>
              <button type="button">모두 보기</button>
            </header>
            <main className="story-list">
              <ol>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>yum_s</h2>
                        <span>16분 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>drink_eat_drink</h2>
                        <span>3시간 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>hyukyc</h2>
                        <span>20시간 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>jminkeek</h2>
                        <span>21시간 전</span>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>yum_s</h2>
                        <span>16분 전</span>
                      </div>
                    </div>
                  </article>
                </li>
              </ol>
            </main>
          </section>
          <section className="suggestion">
            <header>
              <h2>회원님을 위한 추천</h2>
              <button type="button">모두 보기</button>
            </header>
            <main className="suggestion-list">
              <ul>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>Joaaaaaahye</h2>
                        <span>_legend_a님 외 2명이...</span>
                      </div>
                    </div>
                    <button type="button">팔로우</button>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>rampart81</h2>
                        <span>ringo.in.seoul님 외 12...</span>
                      </div>
                    </div>
                    <button type="button">팔로우</button>
                  </article>
                </li>
                <li>
                  <article className="updated-users">
                    <div className="updated-user">
                      <div className="updated-user__img" />
                      <div className="updated-user__info">
                        <h2>shawnjjoo</h2>
                        <span>jimmylee1220님 외 1...</span>
                      </div>
                    </div>
                    <button type="button">팔로우</button>
                  </article>
                </li>
              </ul>
            </main>
          </section>
          <footer className="footer">
            <a href="#!" target="_blank">
              Instagram 정보
            </a>
            <a href="#!" target="_blank">
              지원
            </a>
            <a href="#!" target="_blank">
              홍보 센터
            </a>
            <a href="#!" target="_blank">
              API
            </a>{' '}
            <br />
            <a href="#!" target="_blank">
              채용 정보
            </a>
            <a href="#!" target="_blank">
              개인정보처리방침
            </a>
            <a href="#!" target="_blank">
              약관
            </a>{' '}
            <br />
            <a href="#!" target="_blank">
              디렉터리
            </a>
            <a href="#!" target="_blank">
              프로필
            </a>
            <a href="#!" target="_blank">
              해시태그
            </a>
            <a href="#!" target="_blank">
              언어
            </a>
          </footer>
        </aside>
      </div>
    </div>
  );
};

export default MainDahyun;
