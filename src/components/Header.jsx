import React from 'react';
import { useDispatch, connect, useSelector } from 'react-redux'
import { feed, friends, editProfile, logoutSquawkUser } from '../../actions/userActions'
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged);
  const username = useSelector(state => state.user.info.username);
  return (
    <div className="header" id="main-header">
      <div className="row">
      <div className="col-3">
      <br></br>
      {isLogged ? <div id="username"><h6>{username}, you are logged in.</h6></div> : ''}
      </div>
        <div className="col-6">
            <div className="row">
              <div className="col-12 d-flex justify-content-center center-text">
                <h1>Squawk</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center center-text">
                <h5>Where the bird enthusiasts gather</h5>
              </div>
            </div>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
          <div className="row">
            <div className="col-12 hidden justiy-content-center" id="navButtonsDiv">
              <Menu id="navigationButton" menuButton={<MenuButton>Navigate</MenuButton>}>
                <MenuItem onClick={() => dispatch(feed())}>Feed</MenuItem>
                <MenuItem onClick={() => dispatch(friends())}>Friends</MenuItem>
                <MenuItem onClick={() => dispatch(editProfile())}>Edit Profile</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => dispatch(logoutSquawkUser())}><b>Logout</b></MenuItem>
              </Menu>
            </div>
          </div>
        </div>  
        </div>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
    </div>
  );
}

export default connect(null, { feed, friends, editProfile, logoutSquawkUser })(Header);