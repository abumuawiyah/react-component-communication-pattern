import React from "react";
import { ParentContext } from "./Parent";

function Footer({ children }) {
  const parentContext = React.useContext(ParentContext);

  return <div onClick={parentContext.onClick}>{children}</div>;
}

export default Footer;
