/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";

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

    const postRequest = async (url: string, body: any) => {
        setLoading(true);

        const returnData = await axios({
            method: "post",
            url: url,
            data: body,
        })
            .then((result) => {
                setNotification("SUCESSO", "success", "LOGIN REALIZADO COM SUCESSO!");
                return result.data;
            })
            .catch(() => {
                setNotification("ERRO!", "error", "USUÁRIO OU SENHA INVÁLIDO!");
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
