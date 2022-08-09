import React from 'react';

const FooterInfo = () => {
  return (
    <div className="etc">
      <ul>
        {FOOTER_INFO.map(footerList => {
          return <li key={footerList.id}>{footerList.footerName}</li>;
        })}
      </ul>
    </div>
  );
};
export default FooterInfo;

const FOOTER_INFO = [
  { id: 1, footerName: 'instagram 정보∙지원∙홍보∙센터∙API∙채용' },
  {
    id: 2,
    footerName: '정보∙개인정보처리방침∙약관∙디렉터리∙프로필∙해시테그∙언어',
  },
  { id: 3, footerName: 'ⓒ 2019 INSTAGRAM' },
];
