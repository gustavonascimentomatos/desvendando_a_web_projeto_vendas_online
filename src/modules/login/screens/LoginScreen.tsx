import { ButtonAntd } from "../../../shared/buttons/button/button.styles";
import Input from "../../../shared/inputs/input/Input";
import {
    BackgroundImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    LogoImage,
    TitleLogin,
} from "../styles/loginScreen.styles";

const LoginSreen = () => {
    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png"></LogoImage>
                    <TitleLogin level={2} type="secondary">
                        LOGIN
                    </TitleLogin>
                    <Input title="USUÁRIO:" />
                    <Input title="SENHA:" />
                    <ButtonAntd type="primary">ENTRAR</ButtonAntd>
                </LimitedContainer>
            </ContainerLogin>

            <BackgroundImage src="./background_web.jpg" />
        </ContainerLoginScreen>
    );
};

export default LoginSreen;
