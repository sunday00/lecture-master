import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import React from 'react'

type SearchInputProps = {
    
}

const SearchInput: React.FC<SearchInputProps> = (props) => 
{

    const keyword = '';

    function setKeyword(value: string){}
    function goToUser(value: string){}

    return (
        <div>
            <AutoComplete
                value={keyword}
                onChange={setKeyword}
                onSelect={goToUser}
                style={{ width: 250 }}
                options={[]}
                autoFocus
            >
                <Input size="large" placeholder="input here" prefix={<SearchOutlined />} />
            </AutoComplete>
        </div>
    );
}

export default SearchInput;