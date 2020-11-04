import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Space, Typography } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../states';
import { actions as userAction } from '../../User/states';

type SearchInputProps = {
    
}

type StateType = {
    search: {
        keyword: string,
        autoCompletes: Array<AutoCompleteType>
    }
}

type AutoCompleteType = {
    name: string,
    department: string,
    tag: string
}

const SearchInput: React.FC<SearchInputProps> = (props) => 
{
    const keyword = useSelector( (state: StateType) => state.search.keyword);
    const dispatch = useDispatch();

    function setKeyword(value: string){
        if( value !== keyword ){
            dispatch(actions.setValue('keyword', value)); 
            dispatch(actions.fetchAutoComplete(value)); 
        }
    }

    const autoCompletes = useSelector( (state: StateType) => state.search.autoCompletes );

    const history = useHistory(); 

    function goToUser(userName: string){
        const user = autoCompletes.find( item => item.name === userName );
        if(user){
            dispatch(userAction.setValue('user', user));
            history.push(`/user/${userName}`);
        }
    }

    return (
        <div>
            <AutoComplete
                value={keyword}
                onChange={setKeyword}
                onSelect={goToUser}
                style={{ width: 250 }}
                options={ autoCompletes.map( makeAutoComplete ) }
                autoFocus={true}
            >
                <Input size="large" placeholder="input here" prefix={<SearchOutlined />} />
            </AutoComplete>
        </div>
    );
}

export default SearchInput;

function makeAutoComplete(ac : AutoCompleteType) {
    return {
        value: ac.name,
        label: (<Space>
            <Typography.Text strong>{ac.name}</Typography.Text>
            <Typography.Text type='secondary'>{ac.department}</Typography.Text>
            <Typography.Text>{ac.tag}</Typography.Text>
        </Space>)
    }
}
