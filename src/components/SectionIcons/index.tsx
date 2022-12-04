import styled from "styled-components";

const WrapperIcons = styled.section`
    background-color: ${(props) => props.theme.background};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    border: 1px solid;
`;

const DivIcons = styled.div`
    width: 25%;
    height: 80%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;

const Icon = styled.span`
    font-size: 6rem;
    color: ${(props)=> props.theme.primary};
`;

const TitleIcon = styled.h4`
    font-size: 2rem;
    color: ${(props)=> props.theme.primary};
`;

const TextDescription = styled.p `
    color: ${(props)=> props.theme.fontColor};
    font-size: 1.6rem;
`;

export { WrapperIcons, DivIcons ,Icon, TitleIcon, TextDescription};