import React from 'react'
import {Button,Avatar, Typography} from 'antd'
import styled from 'styled-components'
import { auth} from '../../firebase/config'
import { AuthContext } from '../../Context/AuthProvider'


const WrappedStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 16px;
    border-bottom: 1px solid rgb(230,230,230);
    .username {
        color: white;
        margin-left: 5px;
    }

`
export default function UserInfo() {
    

    const {user: {displayName,photoURL}} = React.useContext(AuthContext)
  return (
    <WrappedStyled>
        <div>
            <Avatar src={photoURL}>{photoURL ? "" : displayName?.charAt(0).toUpperCase()}</Avatar>
            <Typography.Text className="username">{displayName}</Typography.Text>
        </div>
        <Button ghost onClick={() => auth.signOut()}>
            Đăng xuất
        </Button>
    </WrappedStyled>
  )
}
