import React from 'react';
import Logo from '../Logo'
import { Input } from 'antd';
const { Search } = Input;
import './Header.css'

function Header(props) {
    return (
        <header>
            <Logo/>
            <Search placeholder="input search loading default" loading={false} />
        </header>
    );
}

export default Header;