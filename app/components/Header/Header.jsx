import React from 'react';
import Logo from '../Logo'
import {Avatar, Input} from 'antd';

const {Search} = Input;
import './Header.css'
import UserAvatar from "@/app/components/UserAvatar/UserAvatar";

function Header() {
    return (
        <header>
            <Logo/>
            <Search size={"large"} className='search-bar' placeholder="Search anything" loading={false}/>
            <UserAvatar />
        </header>
    );
}

export default Header;