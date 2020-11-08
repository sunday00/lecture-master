import { Col, Descriptions, PageHeader, Row, Space, Spin, Typography } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import userFetchInfo  from '../../common/hook/userFetchInfo';
import { actions, Types } from './states';

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
    }, [dispatch, name]);

    // const isFetchedComplete = true;
    const {isFetched, isSlow} = userFetchInfo(Types.FetchUser);

    return (
        <Row justify="center">
            <Col xs={24} md={20} lg={14}>
                <PageHeader onBack={history.goBack} title={<Space>
                    'user info'
                    {isSlow && <Spin size="small" />}</Space>}>
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
                    {!user && isFetched && (
                        <Typography.Text>No user '{name}'.</Typography.Text>
                    )}
                </PageHeader>
            </Col>
        </Row>
    );
}

export default User;