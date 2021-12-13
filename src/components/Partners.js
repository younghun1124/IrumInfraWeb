import React from 'react';
import { Row, Col } from 'antd';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

import Zoom from 'react-reveal/Zoom';
const Partners = () => {
    return (
        <Zoom cascade>
            <GridDiv>
                <Partner
                    imgLink='/Intro/Partners/Lenovo_logo_red.png'
                    hyperLink='https://www.lenovo.com/kr/ko/'
                >
                    Lenovo
                </Partner>
                <Partner
                    imgLink='/Intro/Partners/HPE-logo-exence.png'
                    hyperLink='http://www.hpe.com/'
                >
                    HP Enterprise
                </Partner>
                <Partner
                    imgLink='/Intro/Partners/dell-logo.png'
                    hyperLink='http://www.dell.com/'
                >
                    Dell
                </Partner>
                <Partner
                    imgLink='/Intro/Partners/LGe.jpg'
                    hyperLink='http://www.lge.co.kr/'
                >
                    LG 전자
                </Partner>
                <Partner
                    imgLink='/Intro/Partners/MS.png'
                    hyperLink='http://www.microsoft.com//'
                >
                    Microsoft
                </Partner>
                <Partner
                    imgLink='/Intro/Partners/nutanix.png'
                    hyperLink='https://www.nutanix.com/kr'
                >
                    Nutanix
                </Partner>
                <Partner
                    imgLink='/Intro/Partners/vmware.png'
                    hyperLink='http://www.vmware.com/'
                >
                    vmware
                </Partner>
                {/* <Partner
                    imgLink='/Intro/Partners/Tidalscale.png'
                    hyperLink='http://www.tidalscale.com/'
                >
                    Tidalscale
                </Partner> */}
            </GridDiv>
        </Zoom>
    );
};

const Partner = ({ imgLink, hyperLink, children }) => {
    return (
        <GridItem>
            <h2>{children}</h2>
            <LogoImg alt={children} src={imgLink} />
            <a target='_blank' rel='noreferrer' href={hyperLink}>
                Read more {'>'}
            </a>
        </GridItem>
    );
};
export default Partners;

const LogoImg = styled.img`
    width: 100%;
`;

const GridDiv = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    gap: 5%;
    ${({ theme }) => theme.device.tablet} {
        grid-template-columns: repeat(auto-fill, minmax(50%, auto));
    }
    ${({ theme }) => theme.device.mobile} {
        grid-template-columns: repeat(auto-fill, minmax(100%, auto));
    }
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    transition: all 0.1s linear;
    &:hover {
        transform: scale(1.1);
    }
`;
