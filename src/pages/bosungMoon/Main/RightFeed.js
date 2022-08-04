import React from 'react';
import './RightFeed.scss';

const RightFeed = () => {
  return (
    <div className="mainRight">
      <div className="mainRightHead">
        <img src="images/me.jpeg" alt="나" />
        <div className="rightHead">
          <p className="bold">haydemMoon127</p>
          <p>문보성</p>
        </div>
      </div>

      <div className="mainRightMiddle">
        <div className="mainMiddleHead">
          <div className="rightMiddleHead">
            <p className="rightMiddleHeadFont1">스토리</p>
            <p className="rightMiddleHeadFont12">모두 보기</p>
          </div>
        </div>

        <div className="mainMiddleMiddle">
          <img src="images/marathon.jpeg" alt="나" />
          <div className="rightMiddle">
            <p className="bold">full_runner</p>
            <p className="time">16분 전</p>
          </div>
        </div>
        <div className="mainMiddleMiddle">
          <img src="images/pilates.jpeg" alt="나" />
          <div className="rightMiddle">
            <p className="bold">pilasophy</p>
            <p className="time">3시간 전</p>
          </div>
        </div>
        <div className="mainMiddleMiddle">
          <img src="images/sebu.jpeg" alt="나" />
          <div className="rightMiddle">
            <p className="bold">sebu_chill</p>
            <p className="time">20시간 전</p>
          </div>
        </div>
        <div className="mainMiddleMiddle">
          <img src="images/serf.jpeg" alt="나" />
          <div className="rightMiddle">
            <p className="bold">surf_yangyang</p>
            <p className="time">23시간 전</p>
          </div>
        </div>
      </div>

      <div className="mainRightBottom">
        <div className="mainBottomHead">
          <div className="rightBottomHead">
            <p className="rightBottomHeadFont1">회원님을 위한 추천</p>
            <p className="rightBottomHeadFont2">모두 보기</p>
          </div>
        </div>

        <div className="mainBottomBottom">
          <div className="realLast">
            <div className="bottomLast">
              <img src="images/weight.jpeg" alt="나" />
              <div className="rightBottomBottom">
                <p className="bold">weight_man</p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'lightgray',
                  }}
                >
                  _legend_a님 외 2명이...
                </p>
              </div>
            </div>
            <div>
              <p className="bottomCenter">팔로우</p>
            </div>
          </div>
          <div className="realLast">
            <div className="bottomLast">
              <img src="images/tan.jpeg" alt="나" />
              <div className="rightBottomBottom">
                <p className="bold">tanning_101</p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'lightgray',
                  }}
                >
                  _legend_a님 외 2명이...
                </p>
              </div>
            </div>
            <div>
              <p className="bottomCenter">팔로우</p>
            </div>
          </div>
          <div className="realLast">
            <div className="bottomLast">
              <img src="images/afternoon.jpeg" alt="나" />
              <div className="rightBottomBottom">
                <p className="bold">tea_afternoon</p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'lightgray',
                  }}
                >
                  _legend_a님 외 2명이...
                </p>
              </div>
            </div>
            <div>
              <p className="bottomCenter">팔로우</p>
            </div>
          </div>
        </div>
      </div>

      <div className="etc">
        <p>
          instagram 정보∙지원∙홍보
          센터∙ApI∙채용정보∙개인정보처리방침∙약관∙디렉터리∙프로필∙해시테그∙언어
        </p>
        <br />
        <p>ⓒ 2019 INSTAGRAM</p>
      </div>
    </div>
  );
};

export default RightFeed;
