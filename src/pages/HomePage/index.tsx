import PageHeader from "@/pageComponents/header";
import Footer from "@/pageComponents/footer";
import headerList from "@/consts/menuList";
import { Content } from "@/pageComponents/content";

const HomePage = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <Content />
      <Footer />
    </>
  );
};

export default HomePage;
