import PageHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload } from "@/components/Upload";
import headerList from "@/consts/menuList";

const HomePage = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <Upload accept="image/*" />
      <Footer />
    </>
  );
};

export default HomePage;
