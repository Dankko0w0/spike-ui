import Layout from "../../../Layout/Layout";
import Header from "../../../Layout/Header";
import Sider from "../../../Layout/Sider";
import Footer from "../../../Layout/Footer";
import RedirectContent from "./RedirectContent";

export default function Redirect() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider />}
      content={<RedirectContent />}
      footer={<Footer />}
    />
  );
} 