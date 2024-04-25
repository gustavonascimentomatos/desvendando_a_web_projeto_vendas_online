/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";

import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { useGlobalContext } from "./useGlobalContext";

export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const { setNotification } = useGlobalContext();

    const getRequest = async (url: string) => {
        setLoading(true);

        return await axios({
            method: "get ",
            url: url,
        })
            .then((result) => {
                return result.data;
            })
            .catch(() => {
                alert("Erro!");
            });
    };

    const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
        setLoading(true);

        const returnData = await connectionAPIPost<T>(url, body)
            .then((result) => {
                setNotification("SUCESSO", "success", "LOGIN REALIZADO COM SUCESSO!");
                return result;
            })
            .catch((error: Error) => {
                setNotification("ERRO!", "error", error.message);
                return undefined;
            });

        setLoading(false);
        return returnData;
    };
    return {
        loading,
        getRequest,
        postRequest,
    };
};
