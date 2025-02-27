import PageHeader from '@/pageComponents/header';
import Footer from '@/pageComponents/footer';
import headerList from '@/consts/menuList';
import { Content } from '@/pageComponents/content';
import { TaroButtonCore } from '@/pageComponents/playground/taro-button-core';

export const Home = () => {
  const TaroButton = new TaroButtonCore();

  return (
    <>
      <PageHeader headerList={headerList} />
      {JSON.stringify(TaroButton)}
      <Content />
      <Footer />
    </>
  );
};
