import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../components/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/author" element={<Author />} /> */}
      </Route>
    </Routes>
  );
};

export default Router;
