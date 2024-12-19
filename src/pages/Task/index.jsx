import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import TaskContent from "./TaskContent";

export default function Task() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="task-btn" />}
      content={<TaskContent />}
      footer={<Footer />}
    />
  );
} 