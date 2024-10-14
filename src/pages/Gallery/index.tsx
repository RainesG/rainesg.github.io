import { Content } from "@/pageComponents/content";
import PageHeader from "@/pageComponents/header";
import headerList from "@/consts/menuList";

export const Gallery = () => {
  return (
    <>
      <PageHeader headerList={headerList} />
      <Content />
    </>
  );
};
