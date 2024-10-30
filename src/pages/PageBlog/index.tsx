import testAction from "../../store/actions/testAction";
import { useAppDispatch } from "../../reduxHook";
import { useEffect, useState } from "react";
import InputComp from "../../components/InputComp";

const PageBlog = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState([
    { name: "aaa", type: "a01" },
    { name: "bbb", type: "b01" },
    { name: "ccc", type: "c01" },
  ]);

  useEffect(() => {
    dispatch(testAction());
  });

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
        return <InputComp dataIn={e} modifyData={modifyFunc} key={index} />;
      })}
    </>
  );
};

export default PageBlog;
