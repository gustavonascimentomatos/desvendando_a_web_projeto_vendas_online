import { createContext, useContext, useState } from "react";

type NotificationType = "success" | "info" | "warning" | "error";
interface NotificationProps {
    message: string;
    type: NotificationType;
    descripotion?: string;
}
interface GlobalData {
    accessToken?: string;
    notification?: NotificationProps;
}

interface GlobalContexProps {
    globalData: GlobalData;
    setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContexProps);

interface GlobalProviderProps {
    children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({});

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);

    const setAccessToken = (accessToken: string) => {
        setGlobalData({
            ...globalData,
            accessToken,
        });
    };

    const setNotification = (message: string, type: NotificationType, descripotion?: string) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                type,
                descripotion,
            },
        });
    };

    return {
        notification: globalData.notification,
        accessToken: globalData.accessToken,
        setAccessToken,
        setNotification,
    };
};
