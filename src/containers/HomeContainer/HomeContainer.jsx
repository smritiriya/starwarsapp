import { NavLink, Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { useState } from 'react';
import appLogo from "../../assets/applogo.png";
import headerMenuIcon from "../../assets/headermenu.png";
import "./HomeContainer.scss";
import { sidebarMenu } from '../../components/Sidebar/utils';

function HomeContainer() {

  const [toggleHeaderMenu, setToggleHeaderMenu] = useState(false);

  const handleToggleHeaderMenu =() => {
    setToggleHeaderMenu(!toggleHeaderMenu);
  }

  const renderSidebarMenu = ({ menu, route }, index) => {
    return(
      <NavLink className={"header-menu-links"} to={route}>{menu}</NavLink>
    )
  }

  return (
    <div className='home-container'>
      <Sidebar />
      <div className="header-container">
        <NavLink to={"/"}><img src={appLogo} alt='applogo' /></NavLink>
        <div className='header-menu-button' onClick={handleToggleHeaderMenu}><img src={headerMenuIcon} alt="" /></div>
      </div>
      <div className='outlet-container'>
        {toggleHeaderMenu &&
          <div className='header-menu-container'>
            {sidebarMenu.map(renderSidebarMenu)}
          </div>
        }
        <Outlet />
      </div>
    </div>
  )
}

export default HomeContainer