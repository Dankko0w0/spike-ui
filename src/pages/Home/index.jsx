import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="home-btn" />}
      content={<HomeContent />}
      footer={<Footer />}
    />
  );
} 