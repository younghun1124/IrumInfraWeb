import React from 'react';
import { Carousel, Typography } from 'antd';
const { Title } = Typography;
const Home = () => {
    const contentStyle = {
        height: '770px',
        color: '#fff',
        lineHeight: '770px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
                <CarouselUnit />
            </Carousel>
        </>
    );
};

const CarouselUnit = ({ src }) => {
    const contentStyle = {
        height: '540px',
        color: '#fff',
        lineHeight: '540px',
        textAlign: 'center',
    };
    return (
        <div
            style={{
                ...contentStyle,
                backgroundImage: "url('Intro-idc.jpg')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Title level={4}>고객과 미래를 함께하는</Title>
            <Title level={2}>{`(주) 이룸인프라`}</Title>
        </div>
    );
};
export default Home;
