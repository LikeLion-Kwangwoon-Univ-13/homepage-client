import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHome } from "./admin";
import { Home, About, Project, Blog, Team, Recruit } from "./(home)";
import Layout from "@/components/(home)/_common/template/Layout.template";
import NotFound from "./not-found";
import AboutCurriculumPage from "./(home)/about/curriculm/page";
import AboutPartsPage from "./(home)/about/parts/page";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route index element={<About />} />
            <Route path="parts" element={<AboutPartsPage />} />
            <Route path="curriculums" element={<AboutCurriculumPage />} />
          </Route>
          <Route path="blogs/*" element={<Blog />} />
          <Route path="projects/*" element={<Project />} />
          <Route path="teams" element={<Team />} />
          <Route path="recruit" element={<Recruit />} />
        </Route>
        <Route path="/admin">
          <Route index element={<AdminHome />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
