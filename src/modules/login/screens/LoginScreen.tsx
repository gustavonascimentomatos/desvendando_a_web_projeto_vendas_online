import {
    BackgroundImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    LogoImage,
} from "../styles/loginScreen.styles";

const LoginSreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background_web.jpg"></BackgroundImage>
            <LimitedContainer>
                <ContainerLogin>
                    <LogoImage src="./logo.png"></LogoImage>
                </ContainerLogin>
            </LimitedContainer>
        </ContainerLoginScreen>
    );
};

export default LoginSreen;
