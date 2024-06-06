// import React from 'react'
import { PlusSquareOutlined } from '@ant-design/icons'
import {Button, Collapse, Typography} from 'antd'
import styled from 'styled-components'
import { useContext } from 'react'

import { AppContext } from '../../Context/AppProvider'

const PanelStyled = styled(Collapse.Panel)`
    &&& {
        .ant-collapse-header, p {
            color: white;
        }
        .ant-collapse-content-box, p {
            padding: 0 40px;
        }
        .add-room {
            color: white;
            padding: 0;
        }
    }
`

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;

`


export default function RoomList() {
    const {rooms,setIsAddRoomVisible,setSelectedRoomId} = useContext(AppContext)
    const handleAddRoom = () => {
        setIsAddRoomVisible(true)
    }
    
  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sách các phòng" key='1'> 
            {
                rooms.map(room => <LinkStyled 
                    key={room.id} 
                    onClick={() => setSelectedRoomId(room.id)}>
                        {room.name}
                        </LinkStyled>)
            }
            <Button type='text' icon={<PlusSquareOutlined/>} style={{padding: "5px"}} className="add-room" onClick={handleAddRoom}>Thêm Phòng</Button>
        </PanelStyled>
    </Collapse>
  )
}
