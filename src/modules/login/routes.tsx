import { RouteObject } from "react-router-dom";

import LoginSreen from "./screens/LoginScreen";

export const loginRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginSreen />,
    },
];
