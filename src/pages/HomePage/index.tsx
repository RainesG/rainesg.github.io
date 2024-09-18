import PageHeader from "../../components/Header";
import Footer from "../../components/Footer";
import headerList from "../..//consts/headerList";

const HomePage = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <Footer />
    </>
  );
};

export default HomePage;
