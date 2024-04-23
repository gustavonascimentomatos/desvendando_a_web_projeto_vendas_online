import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

import { loginRoutes } from "./modules/login/routes";
import { useNotification } from "./shared/hookes/useNotification";

export const mainRoutes: RouteObject[] = [
    {
        path: "/",
        element: <div>TELA PRINCIPAL</div>,
        errorElement: <div>ERRO 404</div>,
    },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

function App() {
    const { contextHolder } = useNotification();
    return (
        <>
            {contextHolder}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
