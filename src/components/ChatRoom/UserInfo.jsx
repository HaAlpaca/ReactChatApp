// import React from 'react'
import {Button,Avatar, Typography} from 'antd'
import styled from 'styled-components'
import { auth} from '../../firebase/config'


const WrappedStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 16px;
    border-bottom: 1px solid rgb(230,230,230);
    .username {
        color: white;
        margin-left: 5px
    }

`
export default function UserInfo() {
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const querySnapshot = await getDocs(collection(db, "users"));
    //             const usersList = [];
    //             querySnapshot.forEach((doc) => {
    //                 usersList.push({ id: doc.id, ...doc.data() });
    //             });
                
    //             console.log(usersList);
    //         } catch (error) {
    //             console.error("Error fetching user documents: ", error);
    //         }
    //     };

    //     fetchUsers();
    // }, []);

    

  return (
    <WrappedStyled>
        <div>
            <Avatar >A</Avatar>
            <Typography.Text className="username">ABC</Typography.Text>
        </div>
        <Button ghost onClick={() => auth.signOut()}>
            Đăng xuất
        </Button>
    </WrappedStyled>
  )
}
