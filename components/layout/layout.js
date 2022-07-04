import React from "react";
import Header from "../header/header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
