import React from 'react';
import { FOOTER_INFO } from './uiData';

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
