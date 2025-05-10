import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome To My Website</h1>}
      footer={<p>&copy; 2023 My Website.All Rights Reserved.</p>}
    >
      <p>This is the content of my website.</p>
    </PageLayout>
  );
};

export default App;
