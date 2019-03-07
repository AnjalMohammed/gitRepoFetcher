import styled from 'styled-components';
import { Card, Button, Tag } from 'antd';


export const P = styled.p`
    font-size: 200%;
    margin-bottom :0;
`;

export const Img = styled.img`
    max-width: 20%;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
`;

export const StyledCard= styled(Card)`
    .ant-card-body{
        background: white !important;
    }
`;

export const FooterButton=styled(Button)`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    border: none;

    :hover{
        color: white;
        background: deepskyblue;
    }
`;

export const ScrollWrapper= styled.div`
    height: 50px;
    overflow: auto;
    margin: 1rem 0;
`;

export const ResponsiveDiv= styled.div`
    display: flex;
    margin: 0.5rem 0;
    justify-content: space-around;

    @media only screen and (max-width: 1250){
        display: block;
        height: 60px
}
`;

export const Styledtag= styled(Tag)`
    @media only screen and (max-width: 400px){
        display: block;
        margin: auto
    }
`;