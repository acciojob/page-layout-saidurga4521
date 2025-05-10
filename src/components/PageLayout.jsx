import React from "react";

const PageLayout = ({ header, children, footer }) => {
  return (
    <div>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default PageLayout;
