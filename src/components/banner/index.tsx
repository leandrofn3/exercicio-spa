import styled from "styled-components";
import dev1 from "../../assets/images/dev-1.jpg";

interface BannerProps {
    Size: number;
}

const Banner = styled.section <BannerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${(props)=> props.Size}vh;
    background-image: url(${dev1});
    background-size: cover;
    background-repeat: no-repeat;

    
& > h2 {
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-align: center;
}

`;

export default Banner;