import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
