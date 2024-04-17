import Input from "../../../shared/inputs/input/Input";
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
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png"></LogoImage>
                    <Input title="USUÁRIO:" />
                    <Input title="SENHA:" />
                </LimitedContainer>
            </ContainerLogin>

            <BackgroundImage src="./background_web.jpg" />
        </ContainerLoginScreen>
    );
};

export default LoginSreen;
