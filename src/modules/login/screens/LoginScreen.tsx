import axios from "axios";
import { useState } from "react";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        await axios({
            method: "post",
            url: "http://localhost:8080/auth",
            data: {
                email: email,
                password: password,
            },
        })
            .then((result) => {
                alert("Login realizado com sucesso!");
                return result.data;
            })
            .catch(() => {
                alert("Usuário ou Senha Inválido!");
            });
    };

    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo_99.png"></LogoImage>
                    <TitleLogin level={2} type="secondary">
                        LOGIN
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
                    <ButtonAntd type="primary" onClick={handleLogin}>
                        ENTRAR
                    </ButtonAntd>
                </LimitedContainer>
            </ContainerLogin>

            <BackgroundImage src="./background_web.jpg" />
        </ContainerLoginScreen>
    );
};

export default LoginSreen;
