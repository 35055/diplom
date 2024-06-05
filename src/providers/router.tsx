import { Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout";
import Home from "../components/pages/home";
import Plan from "../components/pages/plan";
import Quiz from "../components/pages/quiz";
import Lab from "../components/pages/lab";
import Author from "../components/pages/author";
import AnimatedBall from "../components/pages/lab-second";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/lab2" element={<AnimatedBall />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/author" element={<Author />} />
      </Route>
    </Routes>
  );
};

export default Router;
