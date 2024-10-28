import PageHeader from "@/pageComponents/header";
import Footer from "@/pageComponents/footer";
import headerList from "@/consts/menuList";
import { MediaUpload } from "@/basicComponents/mediaUpload";

export const Home = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <MediaUpload
        exsistValue={["11", "21", "31"]}
        finish={() => {
          console.log("home");
        }}
      />
      <Footer />
    </>
  );
};
