import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Button } from 'antd';
//TODO: json파일을 axios로 요청하는 코드 작성
const ModelList = ({ jsonFileName }) => {
    const [modelList, setModelList] = useState(null);
    useEffect(() => {
        async function getModelJson() {
            const result = await axios.get(`/${jsonFileName}`);
            console.log(result);
            setModelList(result.data);
        }
        getModelJson();
    }, []);
    return (
        modelList && (
            <StyledUl>
                {modelList.models.map((model) => (
                    <li>
                        <ModelCard>
                            <ModelImg src={model.imgLink} alt={model.name} />
                            <h3>{model.name}</h3>
                            <p>{model.description}</p>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href={model.dataSheet}
                            >
                                DataSheet
                            </a>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href={model.guide}
                            >
                                guide
                            </a>
                            <Button>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href={model.moreInfoLink}
                                >
                                    자세한 정보
                                </a>
                            </Button>
                            <ul>
                                {model.spec.map((element) => (
                                    <li>{element}</li>
                                ))}
                            </ul>
                        </ModelCard>
                    </li>
                ))}
            </StyledUl>
        )
    );
};
export default ModelList;

const StyledUl = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, auto));
    gap: 3rem 10rem;
`;
const ModelImg = styled.img`
    width: 100%;
`;
const ModelCard = styled.div``;
