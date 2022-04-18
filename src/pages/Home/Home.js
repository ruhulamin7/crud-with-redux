import React from "react";
import Layout from "../../components/Layouts/Layout";
import AddTask from "../../components/Tasks/AddTask";

const Home = () => {
  return (
    <div>
      <Layout>
        <AddTask />
      </Layout>
    </div>
  );
};

export default Home;
