import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import SupportContent from "./SupportContent";

export default function Support() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="support-btn" />}
      content={<SupportContent />}
      footer={<Footer />}
    />
  );
} 