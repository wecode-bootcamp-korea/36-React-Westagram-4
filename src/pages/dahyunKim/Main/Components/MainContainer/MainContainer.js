import Post from './Post/Post';
import Footer from './Footer/Footer';

import './MainContainer.scss';

const MainContainer = ({ postData }) => {
  return (
    <div className="main-container">
      <main className="main-content">
        <section className="time-line">
          <ol>
            {postData.map(data => (
              <Post key={data.id} {...data} />
            ))}
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
        <Footer />
      </aside>
    </div>
  );
};

export default MainContainer;
