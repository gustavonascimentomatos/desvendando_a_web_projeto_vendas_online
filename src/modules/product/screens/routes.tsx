import { RouteObject } from "react-router-dom";

import Product from "./Product";

export enum ProductRoutesEnum {
    PRODUCT = "/product",
}

export const productsScreenRoutes: RouteObject[] = [
    {
        path: ProductRoutesEnum.PRODUCT,
        element: <Product />,
    },
];
