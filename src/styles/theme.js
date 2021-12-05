const fontSizes = {
    title: '3rem',
    subtitle: '2.0rem',
    paragraph: '1.6rem',
};

const deviceSizes = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
};
const device = {
    mobile: `@media screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `@media screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `@media screen and (max-width: ${deviceSizes.laptop})`,
};
// 자주 사용하는 색을 객체로 만들자.
const colors = {
    black: '#000000',
    grey: '#999999',
    green: '#3cb46e',
    blue: '#000080',
    footerDark: '#191f28',
    footerGray: '#b0b8c1',
    cardGray: '#f2f2f2',
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
    flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
    flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

// theme 객체에 감싸서 반환한다.
const theme = {
    fontSizes,
    colors,
    common,
    device,
};

export default theme;
