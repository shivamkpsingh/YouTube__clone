import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    const [inputSearch, setInputSearch] = useState("");
    const inputFunction = (e) => {
        setInputSearch(e.target.value)
    }

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__menu" />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
                        alt="..loading"
                    />
                </Link>

            </div>
            <div className="header__input">
                <input
                    value={inputSearch}
                    onChange={inputFunction}
                    placeholder="Search"
                    type="text" />

                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className="header__inputbutton" />
                </Link>

            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="image"
                    src="https://yt3.ggpht.com/yti/ANoDKi5EqWO9s0eM2c-0FP7SommWtGwL9ZxEm_vgvkSs=s88-c-k-c0x00ffffff-no-rj-mo"
                />
            </div>
        </div>

    )
}

export default Header;
