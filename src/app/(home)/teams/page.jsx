// src/app/(home)/teams/page.jsx
import TeamSection from "./template/TeamSection.template";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function TeamPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <TeamSection />
    </QueryClientProvider>
  );
}
