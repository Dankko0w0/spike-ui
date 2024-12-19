import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="dashboard-btn" />}
      content={<DashboardContent />}
      footer={<Footer />}
    />
  );
} 