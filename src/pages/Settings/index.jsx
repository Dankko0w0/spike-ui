import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import SettingsContent from "./SettingsContent";

export default function Settings() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="settings-btn" />}
      content={<SettingsContent />}
      footer={<Footer />}
    />
  );
} 