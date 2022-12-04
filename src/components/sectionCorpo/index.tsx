import styled from "styled-components";
import dev2 from '../../assets/images/dev-2.jpg';
import dev3 from '../../assets/images/dev-3.jpg';
import dev4 from '../../assets/images/dev-4.jpg';


const SectionCorpo = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => props.theme.background };
    display: flex;
`;

const DivCorpo = styled.div`
    width: 100%;
    height: 60vh;
    color: ${(props)=> props.theme.fontColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    
`;
const ImgCorpo = styled.div`
        background-image: url(${dev2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 103%;
        height: 60vh;
        display: flex;
    
`;
const ImgCorpo2 = styled.div`
        background-image: url(${dev3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 103%;
        height: 60vh;
        display: flex;
    
`;

const ImgCorpo3 = styled.div`
        background-image: url(${dev4});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 103%;
        height: 60vh;
        display: flex;
    
`;
const TitleCorpo = styled.h2`
    font-size: 4rem;
    
`;

const TextCorpo = styled.p `
    color: ${(props)=> props.theme.fontColor};
    font-size: 1.6rem;
    height: 60vh;
`;




export { SectionCorpo, DivCorpo ,TitleCorpo, TextCorpo, ImgCorpo, ImgCorpo2, ImgCorpo3};