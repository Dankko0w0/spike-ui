import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import StatisticsContent from "./StatisticsContent";

export default function Statistics() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="statistics-btn" />}
      content={<StatisticsContent />}
      footer={<Footer />}
    />
  );
} 