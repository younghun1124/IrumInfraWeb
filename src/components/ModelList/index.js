import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    A,
    LinkDiv,
    StyledLi,
    StyledUl,
    ModelImg,
    ModelCard,
} from './ModelListElement';
import { Button } from 'antd';
import { BarChartOutlined, FileTextOutlined } from '@ant-design/icons';
import { Fade } from 'react-reveal';
const ModelList = ({ jsonFileName }) => {
    const [modelList, setModelList] = useState(null);
    useEffect(() => {
        async function getModelJson() {
            const result = await axios.get(`/ModelJson/${jsonFileName}`);
            console.log(result);
            setModelList(result.data);
        }
        getModelJson();
    }, [jsonFileName]);
    return (
        modelList && (
            <StyledUl>
                <Fade bottom cascade>
                    {modelList.models.map((model, index) => (
                        <StyledLi key={index}>
                            <ModelCard>
                                <ModelImg
                                    src={model.imgLink}
                                    alt={model.name}
                                />
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
                </Fade>
            </StyledUl>
        )
    );
};
export default ModelList;
