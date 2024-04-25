import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { firtsScreenRoutes } from "./modules/firstscreen/screens/routes";
import { loginRoutes } from "./modules/login/routes";
import { productsScreenRoutes } from "./modules/product/screens/routes";
import { useNotification } from "./shared/hookes/useNotification";

const router: RemixRouter = createBrowserRouter([
    ...firtsScreenRoutes,
    ...loginRoutes,
    ...productsScreenRoutes,
]);

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
