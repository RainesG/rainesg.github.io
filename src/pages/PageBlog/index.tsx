import { useState } from 'react';
import InputComp from '../../components/InputComp';

const PageBlog = () => {
  const [products, setProducts] = useState([
    { name: 'aaa', type: 'a01' },
    { name: 'bbb', type: 'b01' },
    { name: 'ccc', type: 'c01' },
  ]);

  function modifyFunc(modifiedData: string, type: string) {
    let tmp = products;
    tmp.map((e: { type: string; name: string }) => {
      if (e.type === type) {
        e.name = modifiedData;
      }
    });
    setProducts(tmp);
    console.log(products);
    return products;
  }

  return (
    <>
      <div>我是Blog Page</div>
      {products.map((e, index) => {
        return <InputComp value={e.name} key={index} />;
      })}
    </>
  );
};

export default PageBlog;
