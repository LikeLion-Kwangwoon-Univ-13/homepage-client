import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetailPage() {
  const { title } = useParams();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold">Project: {decodeURIComponent(title)}</h1>
      <p className="mt-4">This is the detail page for <strong>{decodeURIComponent(title)}</strong>.</p>
    </div>
  );
}
