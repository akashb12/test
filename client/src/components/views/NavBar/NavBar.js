import React, { useState } from "react";
import RightMenu from "./Sections/RightMenu";
import { Link } from "react-router-dom";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ zIndex: 5, width: "100%" }}
    >

      <div className="menu__container">
        <div className="menu_left">{/* <LeftMenu mode="horizontal" /> */}</div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="NAKSH MART"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          {/* <LeftMenu mode="inline" /> */}
          <RightMenu mode="inline" close={onClose} />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
