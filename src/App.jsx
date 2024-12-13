import Layout from './Layout/Layout';
import Header from './Layout/Header';
import Sider from './Layout/Sider';
import Content from './Layout/Content';
import Footer from './Layout/Footer';

function App() {
  return (
    <div className="bg-[#FBF8F6]">
      <Layout 
        header={<Header />}
        sider={<Sider />}
        content={<Content />}
        footer={<Footer />}
      />
    </div>
  );
}

export default App;
