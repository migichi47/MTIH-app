import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <main className="relative top-15 pb-50">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
