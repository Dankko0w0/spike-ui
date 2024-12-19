import Layout from "../../../Layout/Layout";
import Header from "../../../Layout/Header";
import Sider from "../../../Layout/Sider";
import Footer from "../../../Layout/Footer";
import ServiceUnavailableContent from "./ServiceUnavailableContent";

export default function ServiceUnavailable() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider />}
      content={<ServiceUnavailableContent />}
      footer={<Footer />}
    />
  );
} 