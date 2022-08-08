import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';
import './Main.scss';

const MainDahyun = () => {
  return (
    <div className="mainApp">
      <Nav />
      <div className="main-container">
        <main className="main-content">
          <section className="time-line">
            <ol>
              <Post />
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
