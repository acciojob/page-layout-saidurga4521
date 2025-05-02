import React from "react";

const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default PageLayout;
