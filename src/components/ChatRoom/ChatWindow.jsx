// import React from 'react'

import { UserAddOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input, Tooltip } from 'antd';
import styled from 'styled-components';
import Message from './Message';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';

const WrappedStyled = styled.div`
    height: 100vh;
`;

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 64px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header {
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &__title {
            margin: 0;
            font-weight: bold;
        }
        &__description {
            font-size: 12px;
        }
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;

const ContentStyled = styled.div`
    height: calc(100% - 87px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 11px;
`;
const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

export default function ChatWindow() {
    const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);

    return (
        <WrappedStyled>
            {selectedRoom.id ? (
                <>
                    <HeaderStyled>
                        <div className="header__info">
                            <p className="header__title">{selectedRoom.name}</p>
                            <p className="header__description">{selectedRoom.description}</p>
                        </div>

                        <ButtonGroupStyled>
                            <Button
                                icon={<UserAddOutlined />}
                                type="text"
                                style={{ padding: '5px' }}
                                onClick={() => setIsInviteMemberVisible(true)}>
                                Thêm thành viên
                            </Button>
                            <Avatar.Group size="small" maxCount={3}>
                                {members.map((member) => (
                                    <Tooltip key={member.id} title={member.displayName}>
                                        <Avatar src={member.photoURL}>
                                            {member.photoURL
                                                ? ''
                                                : member.displayName?.charAt(0)?.toUpperCase}
                                        </Avatar>
                                    </Tooltip>
                                ))}
                            </Avatar.Group>
                        </ButtonGroupStyled>
                    </HeaderStyled>
                    <ContentStyled>
                        <MessageListStyled>
                            <Message
                                text="Test"
                                displayName="Alpaca"
                                createAt={Date.now()}
                                photoUrl="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/439586236_3664752570520746_2486317449040107640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8lU1bKWR_kwQ7kNvgGxo5Dh&_nc_ht=scontent.fhan19-1.fna&oh=00_AYCWF3NwjRBkhRfhNvxghKg6S41sRVYbebJTyP6R32TSdQ&oe=66658F42"></Message>
                            <Message
                                text="Test"
                                displayName="Alpaca"
                                createAt={Date.now()}
                                photoUrl="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/439586236_3664752570520746_2486317449040107640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8lU1bKWR_kwQ7kNvgGxo5Dh&_nc_ht=scontent.fhan19-1.fna&oh=00_AYCWF3NwjRBkhRfhNvxghKg6S41sRVYbebJTyP6R32TSdQ&oe=66658F42"></Message>
                            <Message
                                text="Test"
                                displayName="Alpaca"
                                createAt={Date.now()}
                                photoUrl="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/439586236_3664752570520746_2486317449040107640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8lU1bKWR_kwQ7kNvgGxo5Dh&_nc_ht=scontent.fhan19-1.fna&oh=00_AYCWF3NwjRBkhRfhNvxghKg6S41sRVYbebJTyP6R32TSdQ&oe=66658F42"></Message>
                            <Message
                                text="Test"
                                displayName="Alpaca"
                                createAt={Date.now()}
                                photoUrl="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/439586236_3664752570520746_2486317449040107640_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8lU1bKWR_kwQ7kNvgGxo5Dh&_nc_ht=scontent.fhan19-1.fna&oh=00_AYCWF3NwjRBkhRfhNvxghKg6S41sRVYbebJTyP6R32TSdQ&oe=66658F42"></Message>
                        </MessageListStyled>

                        <FormStyled>
                            <Form.Item>
                                <Input
                                    placeholder="Nhập tin nhắn"
                                    bordered={false}
                                    autoComplete="off"
                                />
                            </Form.Item>
                            <Button type="primary">Gửi</Button>
                        </FormStyled>
                    </ContentStyled>
                </>
            ) : (
                <Alert
                    message="Hãy chọn phòng"
                    type="info"
                    showIcon
                    style={{ margin: '5px' }}
                    closable
                />
            )}
        </WrappedStyled>
    );
}
