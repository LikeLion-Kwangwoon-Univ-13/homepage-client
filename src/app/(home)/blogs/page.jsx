import BlogHighlightSection from "../../../components/(home)/blogs/template/Some.template";
import { Routes, Route } from "react-router-dom";
import BlogAllPage from "./all/page";
import BlogDetailPage from "./[id]/page";


export default function BlogPage() {
  return (
    <>
      <Routes>
        <Route index element={<BlogHighlightSection />} />
        <Route path="all" element={<BlogAllPage />} />
        <Route path=":id" element={<BlogDetailPage />} />

      </Routes>
    </>
  );
}
