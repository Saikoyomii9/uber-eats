import { formatCountdown } from "antd/es/statistic/utils";
import { createContext, useContext, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Restaurant } from "../models";

const RestarauntContextProvider = ({children}) {

        const [user, setUser] = useState();
        const [restaraunt, setRestaraunt] = useState();
        const sub = user?.attribute?.sub;
};

export default RestarauntContextProvider;