import { Content } from "@/pageComponents/content";
import PageHeader from "@/pageComponents/header";
import headerList from "@/consts/menuList";
import { MediaUpload } from "@/basicComponents/mediaUpload";

export const Gallery = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <MediaUpload
        exsistValue={["1", "2", "3"]}
        finish={() => {
          console.log("gallery");
        }}
      />
      <Content />
    </>
  );
};
