import PageHeader from "../components/Header";
import { Routes, Route, Navigate } from "react-router";
import PageBlog from "../pages/PageBlog";
import PageDocs from "../pages/PageDocs";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";

function RootRouter() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Navigate replace to="/blog" />}></Route>
        <Route path="/blog" element={<PageBlog />}></Route>
        <Route path="/docs" element={<PageDocs />}></Route>
        <Route path="/one" element={<PageOne />}></Route>
        <Route path="/two" element={<PageTwo />}></Route>
        <Route path="/three" element={<PageThree />}></Route>
        <Route path="/four" element={<PageFour />}></Route>
      </Routes>
    </>
  );
}

export default RootRouter;
