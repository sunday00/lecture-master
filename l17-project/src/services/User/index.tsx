import { Col, Descriptions, PageHeader, Row, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from './states';

type UserProps = {
    match: {
        params: {
            name: string
        }
    }
}

type StateType = {
    user: {
        user?: {
            name: string,
            department: string,
            tag: string
        }
    }
}

const User: React.FC<UserProps> = (props) => 
{
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state: StateType)  => state.user.user);

    const name = props.match.params.name;
    useEffect(() => {
        dispatch(actions.fetchUser(name));
    }, [name]);

    const isFetchedComplete = true;

    return (
        <Row justify="center">
            <Col xs={24} md={20} lg={14}>
                <PageHeader onBack={history.goBack} title="user info">
                {user && (
                    <Descriptions layout="vertical" bordered column={1}>
                        <Descriptions.Item label="name">
                            <Typography.Text>{user.name}</Typography.Text>
                        </Descriptions.Item>
                        <Descriptions.Item label="department">{user.department}</Descriptions.Item>
                        <Descriptions.Item label="tag">{user.tag}</Descriptions.Item>
                        <Descriptions.Item label="log">log</Descriptions.Item>
                    </Descriptions>
                )}
                {!user && isFetchedComplete && (
                    <Typography.Text>No user '{name}'.</Typography.Text>
                )}
                </PageHeader>
            </Col>
        </Row>
    );
}

export default User;