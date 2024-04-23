import { useState } from "react";

import { ButtonAntd } from "../../../shared/componentes/buttons/button/button.styles";
import SVGLogo from "../../../shared/componentes/icons/SVGLogo";
import Input from "../../../shared/componentes/inputs/input/Input";
import { useGlobalContext } from "../../../shared/hookes/useGlobalContext";
import { useRequests } from "../../../shared/hookes/useRequests";
import {
    BackgroundImage,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    TitleLogin,
} from "../styles/loginScreen.styles";

const LoginSreen = () => {
    const { accessToken, setAccessToken } = useGlobalContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { postRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        setAccessToken("New Token");
        postRequest("http://localhost:8080/auth", {
            email: email,
            password: password,
        });
    };

    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <SVGLogo />
                    <TitleLogin level={2} type="secondary">
                        LOGIN ({accessToken})
                    </TitleLogin>
                    <Input
                        title="USUÁRIO"
                        placeholder="roberto@email.com.br"
                        margin="30px 0px 0px"
                        onChange={handleEmail}
                        value={email}
                    />
                    <Input
                        type="password"
                        placeholder="Senha:"
                        title="SENHA"
                        margin="15px 0px 70px"
                        onChange={handlePassword}
                        value={password}
                    />
                    <ButtonAntd loading={loading} type="primary" onClick={handleLogin}>
                        ENTRAR
                    </ButtonAntd>
                </LimitedContainer>
            </ContainerLogin>

            <BackgroundImage src="./background_web.png" />
        </ContainerLoginScreen>
    );
};

export default LoginSreen;
