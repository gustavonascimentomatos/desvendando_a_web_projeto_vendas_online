import { RouteObject } from "react-router-dom";

import LoginSreen from "./screens/LoginScreen";

export enum LoginRoutesEnum {
    LOGIN = "/login",
}

export const loginRoutes: RouteObject[] = [
    {
        path: LoginRoutesEnum.LOGIN,
        element: <LoginSreen />,
    },
];
