import React from 'react'
import { Dropdown, Menu } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import styled from 'styled-components';

type SettingsProps = {
    logout: () => void
}

const Settings: React.FC<SettingsProps> = (props) => 
{
    
    const menu = (
        <Menu>
            <Menu.Item onClick={ props.logout }>LOGOUT</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} placement={'bottomRight'} >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#drop-down" >
                {/* <Button shape="circle" icon={<SettingFilled />}></Button>  */}
                <StyledButton>{<SettingFilled />}</StyledButton> 
            </a>
        </Dropdown>
    );
}

export default Settings;

const StyledButton = styled.button`
    border-radius: 100px;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    outline: currentcolor none medium;
    border: 1px solid rgb(85, 85, 85);
    line-height: 1rem;
    color: rgb(85, 85, 85);
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(3, 3, 3, 0.21);
    &:hover {
        color: #007bb7
    }
`;

