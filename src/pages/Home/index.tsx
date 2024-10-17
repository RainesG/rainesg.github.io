import PageHeader from "@/pageComponents/header";
import Footer from "@/pageComponents/footer";
import headerList from "@/consts/menuList";

export const Home = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <Footer />
    </>
  );
};
