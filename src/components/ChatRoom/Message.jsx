// import React from 'react'
import { Avatar, Typography } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrappedStyled = styled.div`
    margin-bottom: 10px;
    .author {
        margin-left: 5px;
        font-weight: bold;
    }
    .date {
        margin-left: 10px;
        font-size: 11px;
        color: #a7a7a7;
    }

    .content {
        margin-left: 30px;
    }
`;
export default function Message({ text, displayName, createAt, photoUrl }) {
    return (
        <WrappedStyled>
            <div>
                <Avatar size="small" src={photoUrl}></Avatar>
                <Typography.Text className="author">{displayName}</Typography.Text>
                <Typography.Text className="date">{createAt}</Typography.Text>
            </div>

            <div>
                <Typography.Text className="content">{text}</Typography.Text>
            </div>
        </WrappedStyled>
    );
}
Message.propTypes = {
    text: PropTypes.string,
    displayName: PropTypes.string,
    createAt: PropTypes.number,
    photoUrl: PropTypes.string
};
