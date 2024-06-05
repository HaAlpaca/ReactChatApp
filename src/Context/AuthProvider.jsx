import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import { auth } from "../firebase/config";
import { Spin } from "antd";
export const AuthContext = React.createContext()

export default function AuthProvider({children}) {
    const [user,setUserInfo] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    
    let navigateTo = useNavigate();

    React.useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const {displayName,email,uid,photoURL} = user
                setUserInfo({
                    displayName, email, uid, photoURL
                })
                setIsLoading(false)
                navigateTo("/");
                
                return;
            }
            navigateTo('/login')
            setIsLoading(false)
        });

        return () => {
            unsubcribed()
        }
    }, [navigateTo]);

    return <div>
        <AuthContext.Provider value={{user}}>
            {isLoading ? <Spin/> : children}
        </AuthContext.Provider>
    </div>;
}

AuthProvider.propTypes = {
    children: PropTypes.any
}
