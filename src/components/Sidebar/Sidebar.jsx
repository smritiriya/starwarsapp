import './Sidebar.scss';
import logo from "../../assets/applogo.png";
import folderLogo from "../../assets/folderlogo.png";
import arrowRight from "../../assets/ArrowRight.png";
import arrowUp from "../../assets/ArrowUp.png";
import { sidebarMenu } from './utils';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

function Sidebar() {

  const location = useLocation();
  const [toggleArrow, setToggleArrow] = useState(false);

  const handleToggleSidebarMenu = () => {
    setToggleArrow(!toggleArrow)
  }

  const renderSidebarMenu = ({ menu, route }, index) => {

    const isCurrentPageActive = location.pathname === route;
    const arrowImage = toggleArrow ? arrowUp : arrowRight;

    return (
      <div key={`rendersidemenu-index${index}`} className={classNames(['sidebar-menu-link-container'], {
        "active-menu": isCurrentPageActive
      })} >
        <div>
          <img src={folderLogo} alt="" />
          <NavLink className="sidebar-menu-link" to={route}>{menu}</NavLink>
        </div>
        <img src={arrowImage} alt="" />
      </div>
    )
  }

  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo-container'>
        <NavLink to={"/"}><img src={logo} alt='' style={{ paddingLeft: "1rem" }} /></NavLink>
      </div>
      <div className="sidebar-menu-container">
        {sidebarMenu.map(renderSidebarMenu)}
      </div>
    </div>
  )
}

export default Sidebar