import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import ConfigContent from "./ConfigContent";

export default function Config() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="config-btn" />}
      content={<ConfigContent />}
      footer={<Footer />}
    />
  );
} 