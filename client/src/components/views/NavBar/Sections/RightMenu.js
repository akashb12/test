/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Icon, Badge } from "antd";
import './Navbar.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        console.log("error")
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="login" onClick={props.close}>
            <b>Signin</b>
          </Link>
        </Menu.Item>
            <Menu.Item key="setting:1"> <Link to="register" onClick={props.close}>
            <b>register</b>
          </Link></Menu.Item>
      </Menu>
    );
  } else {

    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout" onClick={props.close}>
          <a onClick={logoutHandler} style={{color:"#004aad"}}>
            <b>Logout</b>
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
