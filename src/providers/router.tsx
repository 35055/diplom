import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../components/home";
import Plan from "../components/plan";
import Quiz from "../components/quiz";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/author" element={<Author />} /> */}
        <Route path="/plan" element={<Plan />} />
        <Route path="/quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
};

export default Router;
