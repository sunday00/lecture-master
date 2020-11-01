import React from 'react'
import { Button, Dropdown, Menu } from 'antd';
import { SettingFilled } from '@ant-design/icons';

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
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Button shape="circle" icon={<SettingFilled />}></Button> 
            </a>
        </Dropdown>
    );
}

export default Settings;
