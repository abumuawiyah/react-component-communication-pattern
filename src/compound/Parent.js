import React from "react";

const ParentContext = React.createContext({});

function Parent({ children }) {
  function onClick() {
    alert(113);
  }

  return (
    <ParentContext.Provider value={{ onClick }}>
      <div style={{ border: "2px solid red", margin: 20 }}>{children}</div>
    </ParentContext.Provider>
  );
}

export default Parent;
export { ParentContext };
