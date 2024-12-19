import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import Sider from "../../Layout/Sider";
import Footer from "../../Layout/Footer";
import ProfileContent from "./ProfileContent";

export default function Profile() {
  return (
    <Layout
      header={<Header />}
      sider={<Sider defaultSelectedId="profile-btn" />}
      content={<ProfileContent />}
      footer={<Footer />}
    />
  );
} 