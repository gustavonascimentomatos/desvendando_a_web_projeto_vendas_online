import styled from "styled-components";

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, #8d423c, #f4ba95);
    padding: 0px 22px;
    width: 100%;
    height: 100vh;
    max-width: 450px;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 380px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
