import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout
        header={<h1>This is the Header</h1>}
        footer={<p>This is the Footer</p>}
      >
        <p>This is the main content.</p>
      </PageLayout>
    </div>
  );
};

export default App;
