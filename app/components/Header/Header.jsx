import React from 'react';
import Logo from '../Logo'
import SearchBar from "@/app/components/SearchBar";
import './Header.css'

function Header(props) {
    return (
        <header>
            <Logo/>
            <SearchBar />
        </header>
    );
}

export default Header;