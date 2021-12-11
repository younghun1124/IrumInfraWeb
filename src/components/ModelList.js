import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { BarChartOutlined, FileTextOutlined } from '@ant-design/icons';

const ModelList = ({ jsonFileName }) => {
    const [modelList, setModelList] = useState(null);
    useEffect(() => {
        async function getModelJson() {
            const result = await axios.get(`/${jsonFileName}`);
            console.log(result);
            setModelList(result.data);
        }
        getModelJson();
    }, [jsonFileName]);
    return (
        modelList && (
            <StyledUl>
                {modelList.models.map((model, index) => (
                    <StyledLi key={index}>
                        <ModelCard>
                            <ModelImg src={model.imgLink} alt={model.name} />
                            <h2 style={{ textAlign: 'center' }}>
                                {model.name}
                            </h2>
                            <LinkDiv>
                                {model.dataSheet && (
                                    <A
                                        target='_blank'
                                        rel='noreferrer'
                                        href={model.dataSheet}
                                    >
                                        <BarChartOutlined /> DataSheet
                                    </A>
                                )}
                                {model.guide && (
                                    <A
                                        target='_blank'
                                        rel='noreferrer'
                                        href={model.guide}
                                    >
                                        <FileTextOutlined /> guide
                                    </A>
                                )}
                            </LinkDiv>
                            <br />

                            <p>{model.description}</p>

                            <ul style={{ listStyleType: 'disc' }}>
                                {model.spec.map((element, idx) => (
                                    <li key={idx}>{element}</li>
                                ))}
                            </ul>
                            {model.moreInfoLink && (
                                <Button>
                                    <A
                                        target='_blank'
                                        rel='noreferrer'
                                        href={model.moreInfoLink}
                                    >
                                        자세한 정보
                                    </A>
                                </Button>
                            )}
                        </ModelCard>
                    </StyledLi>
                ))}
            </StyledUl>
        )
    );
};
export default ModelList;

const A = styled.a`
    color: #e31d1a;
`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: space-around;
`;

const StyledLi = styled.li`
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.cardGray};
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, auto));

    gap: 1rem;
`;
const ModelImg = styled.img`
    width: 100%;
`;
const ModelCard = styled.div`
    padding: 10%;
`;
