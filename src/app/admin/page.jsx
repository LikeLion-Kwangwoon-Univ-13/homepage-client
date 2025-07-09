import NotFound from "../not-found";
import useEnterAdmin from "../../hooks/useEnterAdmin";

export default function Page() {
  const { isEnterAdmin } = useEnterAdmin();
  if (!isEnterAdmin) return <NotFound />;
  return <div>admin</div>;
}
