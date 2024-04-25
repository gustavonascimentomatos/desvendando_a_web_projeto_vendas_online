import { RouteObject } from "react-router-dom";

import FirstScreen from "./FirstScreen";

export const firtsScreenRoutes: RouteObject[] = [
    {
        path: "/",
        element: <FirstScreen />,
        errorElement: <div>ERRO 404</div>,
    },
];
