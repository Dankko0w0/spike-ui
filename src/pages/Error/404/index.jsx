import Layout from "../../../Layout/Layout";
import Header from "../../../Layout/Header";
import Sider from "../../../Layout/Sider";
import Footer from "../../../Layout/Footer";
import NotFoundContent from "./NotFoundContent";

export default function NotFound() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider />}
      content={<NotFoundContent />}
      footer={<Footer />}
    />
  );
} 