import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroP,
    HeroH1,
} from './HeroElements';
const HeroSection = () => {
    // const [hover, setHover] = useState(false);
    // const onHover = () => {
    //     setHover(!hover);
    // };
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroP>고객과 미래를 함께하는</HeroP>
                <HeroH1>이룸인프라</HeroH1>
                {/* <HeroBtnWrapper>
                    <Button
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        둘러보기{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
