import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {FOOTER_LIST.map(item => (
        <a key={item.id} href={item.link} rel="noreferroer noopener">
          {item.content}
        </a>
      ))}
    </footer>
  );
};

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    link: '#!',
    content: 'Instagram 정보',
  },
  {
    id: 2,
    link: '#!',
    content: '지원',
  },
  {
    id: 3,
    link: '#!',
    content: '홍보 센터',
  },
  {
    id: 4,
    link: '#!',
    content: 'API',
  },
  {
    id: 5,
    link: '#!',
    content: '채용 정보',
  },
  {
    id: 6,
    link: '#!',
    content: '개인정보처리방침',
  },
  {
    id: 7,
    link: '#!',
    content: '약관',
  },
  {
    id: 8,
    link: '#!',
    content: '디렉터리',
  },
  {
    id: 9,
    link: '#!',
    content: '프로필',
  },
  {
    id: 10,
    link: '#!',
    content: '해시태그',
  },
  {
    id: 11,
    link: '#!',
    content: '언어',
  },
];
