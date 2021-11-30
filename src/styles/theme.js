const fontSizes = {
    title: '3rem',
    subtitle: '2.0rem',
    paragraph: '1.6rem',
};

// 자주 사용하는 색을 객체로 만들자.
const colors = {
    black: '#000000',
    grey: '#999999',
    green: '#3cb46e',
    blue: '#000080',
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
};

export default theme;
