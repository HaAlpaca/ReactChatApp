import React, { useContext, useMemo, useState} from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "./AuthProvider";
import useFirestore from "../hooks/useFirestore";
export const AppContext = React.createContext()

export default function AppProvider({children}) {
    const [isAddRoomVisible,setIsAddRoomVisible] = useState(false)
    const [selectedRoomId,setSelectedRoomId] = useState('')

    const {user:{uid}} = useContext(AuthContext)
    const roomCondition = useMemo(()=> {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    },[uid])
    const rooms = useFirestore('rooms',roomCondition)
    return <div>
        <AppContext.Provider value={{rooms,isAddRoomVisible,setIsAddRoomVisible,selectedRoomId,setSelectedRoomId}}>
            {children}
        </AppContext.Provider>
    </div>;
}
AppProvider.propTypes = {
    children: PropTypes.any
}
