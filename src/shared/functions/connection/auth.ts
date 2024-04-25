import { AUTHORIZATION_KEY } from "../../constants/authorizationsConstants";
import { getIntemStorage, removeItemStorage, setItemStorage } from "./StorageProxy";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATION_KEY, token);
    }
};

export const getAuthorizationToken = () => getIntemStorage(AUTHORIZATION_KEY);
