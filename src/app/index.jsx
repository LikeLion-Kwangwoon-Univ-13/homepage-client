import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHome } from "./admin";
import { Home, About, Project, Blog, Team, Recruit } from "./(home)";
import Layout from "@/components/(home)/_common/template/Layout.template";
import NotFound from "./not-found";
import AboutCurriculumPage from "./(home)/about/curriculm/page";
import AboutPartsPage from "./(home)/about/parts/page";
import AdminLayout from '@/components/admin/template/Layout';
import ProjectListPage from './admin/projects/page';
import ProjectPostPage from './admin/projects/post/page';
import ProjectEditPage from './admin/projects/[projectId]/page';
import GenerationPage from './admin/generations/page';
import GenerationMemberPage from './admin/generations/[generationId]/page';
import BlogPage from "./admin/blogs/page";
import RecruitPage from "./(home)/recruit/page";
import RecruitAdminPage from "./admin/recruits/page";
import Loading from "./loading";

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
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="projects" element={<ProjectListPage />} />
          <Route path="projects/post" element={<ProjectPostPage />} />
          <Route path="projects/:projectId" element={<ProjectEditPage />} />
          <Route path="generations" element={<GenerationPage />} />
          <Route path="generations/:generationId" element={<GenerationMemberPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="recruits" element={<RecruitAdminPage />} />
        </Route>
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
