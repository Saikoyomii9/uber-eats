import { createContext, useContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Restaurant } from "../models";

const RestarauntContext = createContext();

const RestarauntContextProvider = ({children}) => {

        const [user, setUser] = useState();
        const [restaraunt, setRestaraunt] = useState();
        const sub = user?.attribute?.sub;

        useEffect(() => {
                Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser);
        }, []);
        //console.log(user);
        //console.log(sub);

        useEffect(() => {
                if(!sub){
                        return;
                }
                DataStore.query(Restaurant, (r) => r.adminSub.eq(sub)).then(
                        (restaurants) => setRestaraunt(restaurants[0])
                );
        }, [sub])

        console.log(restaraunt);

        return(
                <RestarauntContext.Provider value={{sub, restaraunt, setRestaraunt}}>
                        {children}
                </RestarauntContext.Provider>
        );
};

export default RestarauntContextProvider;

export const useRestaurantContext = () => useContext(RestarauntContext);