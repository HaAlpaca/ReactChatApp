// import React from 'react'
import { PlusSquareOutlined } from '@ant-design/icons'
import {Button, Collapse, Typography} from 'antd'
import styled from 'styled-components'

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
  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sách các phòng" key='1'>
            <LinkStyled>Room 1</LinkStyled>
            <LinkStyled>Room 2</LinkStyled>
            <LinkStyled>Room 3</LinkStyled>
            <Button type='text' icon={<PlusSquareOutlined/>} style={{padding: "5px"}} className="add-room">Thêm Phòng</Button>
        </PanelStyled>
    </Collapse>
  )
}
