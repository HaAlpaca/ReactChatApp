import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './AuthProvider';
import useFirestore from '../hooks/useFirestore';
export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');

    const {
        user: { uid }
    } = useContext(AuthContext);
    const roomCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        };
    }, [uid]);
    const rooms = useFirestore('rooms', roomCondition);

    const selectedRoom = useMemo(
        () => rooms.find((room) => room.id === selectedRoomId) || {},
        [rooms, selectedRoomId]
    );
    console.log(selectedRoomId);

    const userCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members
        };
    }, [selectedRoom.members]);

    const members = useFirestore('users', userCondition);
    console.log({ members });
    return (
        <div>
            <AppContext.Provider
                value={{
                    rooms,
                    members,
                    isAddRoomVisible,
                    setIsAddRoomVisible,
                    selectedRoomId,
                    setSelectedRoomId,
                    selectedRoom,
                    isInviteMemberVisible,
                    setIsInviteMemberVisible
                }}>
                {children}
            </AppContext.Provider>
        </div>
    );
}
AppProvider.propTypes = {
    children: PropTypes.any
};
